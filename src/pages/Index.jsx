import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import Welcome from "../components/Home/Welcome";
import Login from "./login/login";
import Home from "./Home/Home";
import ProfileScreen from "./profile/Profile";
import Automibile from "./automibile/automobile";
import Visitor from "./Visitor/Visitor";
import Package from "./Package/Package";
import { useState } from "react";

export default function Main(){
    const [auth, setAuth] = useState(null);
    return (
        <View style={{ flex: 1 }}>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/Login' element={<Login auth={auth} setAuth={setAuth} />} />
                <Route path='/Home' element={<Home auth={auth} />} />
                <Route path='/Profile' element={<ProfileScreen auth={auth} setAuth={setAuth} />} />
                <Route path='/Cars' element={<Automibile auth={auth} />} />
                <Route path='/Visitor' element={<Visitor auth={auth} />} />
                <Route path='/Package' element={<Package auth={auth} />} />
            </Routes>
        </View>
    )
} 