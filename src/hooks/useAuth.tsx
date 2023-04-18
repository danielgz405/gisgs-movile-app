import React, { useState, useContext, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios';
import { endPoints } from '../api';
import { useLocation, useNavigate } from 'react-router-native';

const AuthContext = createContext({});

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const route = useLocation();
  const navigate = useNavigate();

  const fetchUser = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token && route.pathname !== '/Login') {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const { data } = await axios.get(endPoints.users.profile);
        setUser(data);
      } catch (error) {
        if (error.response === 401) {
          await AsyncStorage.removeItem('token');
          delete axios.defaults.headers.common['Authorization'];
          navigate('/Login')
        }
      }
    } else if (route.pathname === '/Login') {
      setUser(null);
    } else {
      navigate('/Login')
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(endPoints.auth.login, { email, password }, options);
    if (data.token) {
      const token = data.token;
      await AsyncStorage.setItem('token', token);

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.users.profile);
      setUser(user);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    navigate('/Login')
  };

  return {
    user,
    login,
    logout,
  };
}
