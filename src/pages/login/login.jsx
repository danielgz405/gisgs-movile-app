import { View, StyleSheet, Image, Alert, Vibration, ToastAndroid } from "react-native";
import { GeneralInput } from "../../utils/Inputs/Inputs";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import { PrimaryButton } from "../../utils/Buttons/Buttons";
import { PrimaryText, Title } from "../../utils/Texts/Texts";
import { ArrowSmallLeftIcon } from "react-native-heroicons/solid";
import { themes } from "../../assets/themes/themes";
import { Link, useNavigate } from "react-router-native";
import { login } from "../../api/users/users";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
];

export default function Login({auth, setAuth}) {
    const navigate = useNavigate();
    console.log(auth);
    const [data, setData] = useState({
        user: '',
        password: '',
    })

    const submitHandler = () => {        
        login(data.user, data.password)
          .then((res) => {
            if (res.status === 200) {
                Vibration.vibrate()
                ToastAndroid.show('Bienvenido', ToastAndroid.SHORT);
                setAuth(res.data);
                navigate('/Home')
                console.log(res.data);
              } else {
                Vibration.vibrate(PATTERN)
                Alert.alert('Ha ocurrido un error', 'Para mas informacion comuniquese con su administrador', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              }
          })
          .catch((error) => {
            Vibration.vibrate(PATTERN)
            if (error.response && error.response.status === 405) {
                Alert.alert('Ha ocurrido un error', `Verifique su conexion a internet`, [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
            }else {
                Alert.alert('Ha ocurrido un error', `${error}`, [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
            }
          });
      };

    return (
        <View>
            <View style={style.navigation}>
                <Link to="/" style={style.icon}>
                    <ArrowSmallLeftIcon size={30} color={themes.colors.white} />
                </Link>
            </View>
            <View style={style.container}>
                <View style={style.textContainer}>
                    <Image source={require('../../../assets/favicon.png')} style={style.image} />
                    <Title className={['text-white', 'text-center', 'extra-bold', 'text-4xl']} style={{ marginBottom: 15 }}>Gisgs Consulting</Title>
                    <PrimaryText className={['text-white', 'text-center', 'mb-30']}>Bienvenido, en este software podras actualizar la bitacora del dia</PrimaryText>
                </View>
                <View style={style.formContainer}>
                    <GeneralInput placeholder="Ingrese el usuario" keyboardType="email-address" value={data.user} style={style["mb-10"]} onChange={(e) => setData({...data, user: e})} />
                    <GeneralInput placeholder="Ingrese la contraseña" secureTextEntry={true}  keyboardType="default" value={data.password} onChange={(e) => setData({...data, password: e})} />
                </View>
                <PrimaryButton onPress={() => submitHandler()} className={['text-center', 'p-10', 'm-15', 'rounded-full']} text="Inicia sesion" />
            </View> 
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignContent: 'center' 
    },
    formContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    textContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    image: {
        width: 100, 
        height: 100, 
        marginLeft: 'auto', 
        marginRight: 'auto',
        shadowColor: themes.colors.gray[800],
        shadowOffset: {
            width: 10,
            height: 20,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10.84,
    },
    "mb-10": {
        marginBottom: 10
    },
    navigation: {
        marginTop: Constants.statusBarHeight,
        marginLeft: 10,
        marginRight: 10
    },
    icon: {
        color: themes.colors.white,
        width: 30,
        height: 30
    }
})