import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileView from '../../components/profile/profileComponent';
import { ArrowSmallLeftIcon } from 'react-native-heroicons/solid';
import { Link } from 'react-router-native';
import { themes } from '../../assets/themes/themes';
import Constants from "expo-constants";

export default function ProfileScreen () {
    return (
    <View>
        <View style={style.navigation}>
            <Link to="/Home" style={style.icon}>
                <ArrowSmallLeftIcon size={30} color={themes.colors.white} />
            </Link>
        </View>
        <ProfileView
            name="Juan Pérez"
            email="juan.perez@gmail.com"
            profileImage="https://ui-avatars.com/api/?name=User&rounded=true&background=047857&color=fff&bold=true"
        />
    </View>
    );
};
    
const style = StyleSheet.create({
    navigation: {
        paddingTop: Constants.statusBarHeight + 2,
        backgroundColor: themes.colors.secondary,
        padding: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: "row",
    },
    icon: {
        backgroundColor: themes.colors.primary,
        borderRadius: themes.rounded["rounded-full"],
        padding: 6,
    }
})

