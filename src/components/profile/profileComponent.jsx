import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { PrimaryButton } from '../../utils/Buttons/Buttons';
import { themes } from '../../assets/themes/themes';

const ProfileView = ({ name, email, profileImage }) => {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: profileImage }}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <PrimaryButton text="Cerrar sesion" className={['p-10']} style={{marginTop: 10}} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      height: '85%',
      justifyContent: 'center',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginHorizontal: 10,
    },
    textContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
      color: themes.colors.gray[200],
    },
    email: {
      fontSize: 16,
      color: themes.colors.gray[600],
    },
  });

export default ProfileView;