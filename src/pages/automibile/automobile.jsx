import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, ScrollView, Alert, Vibration, ToastAndroid } from "react-native";
import { RadioButton } from 'react-native-paper';
import { styles } from "../../assets/styles/global";
import Constants from "expo-constants";
import { themes } from "../../assets/themes/themes";
import { useEffect, useState } from "react";
import { GeneralInput } from "../../utils/Inputs/Inputs";
import { PrimaryText, Title } from "../../utils/Texts/Texts";
import { Link, useNavigate } from "react-router-native";
import { ArrowSmallLeftIcon } from "react-native-heroicons/solid";
import { Dropdown } from "../../utils/Inputs/Drop";
import { Checkbox } from 'react-native-paper';
import { PrimaryButton } from "../../utils/Buttons/Buttons";
import { insertAutomobile } from "../../api/events/events";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
];

export default function Automobile({ auth }) {
    const navigate = useNavigate();
    const typeItems = [
        { label: "Carro", value: "Carro" },
        { label: "Camión", value: "Camión" },
        { label: "Furgón", value: "Furgón" },
        { label: "Moto", value: "Moto" },
        { label: "Bicicleta", value: "Bicicleta" },
    ]
    const [data, setData] = useState({
        "into": true,
        "carType": "",
        "identification": "",
        "autorization": false,
        "worker": `${auth.name}`,
        "description": ""
    });
    const [isEnabled, setIsEnabled] = useState(false)
    const [checked, setChecked] = useState('into')
    const submitHandler = () => {
        if (!data.carType) {
            ToastAndroid.show('Selecciona un tipo de vehiculo', ToastAndroid.SHORT);
            return
        }
        if (!data.identification) {
            ToastAndroid.show('Ingresa una placa', ToastAndroid.SHORT);
            return
        }
        if (!data.description) {
            ToastAndroid.show('Ingresa una descripcion', ToastAndroid.SHORT);
            return
        }
        if (!data.worker) {
            ToastAndroid.show('Ingresa un a la persona que autorizo', ToastAndroid.SHORT);
            return
        }

        insertAutomobile(data).then(() => {
            Vibration.vibrate()
            ToastAndroid.show('Los datos se han enviado correctamente', ToastAndroid.SHORT);
            navigate('/Home');
        }).catch((error) => {
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
        })
    }

    useEffect(() => {
        if (auth == null){
            navigate('/');
            ToastAndroid.show('Vuelve a iniciar seccion :)', ToastAndroid.SHORT);
        }
    }, [auth])
    return (
        <View>
             <View style={style.navigation}>
                <Link to="/Home" style={style.iconNav}>
                    <ArrowSmallLeftIcon size={30} color={themes.colors.white} />
                </Link>
                <View style={style.textContainer}>
                    <Title className={['extra-bold', 'text-2xl']} style={style.titleText}>Gisgs Consulting</Title>
                    <PrimaryText className={['text-sm']}>Aquí podrá registrar la entrada y salida de vehículos</PrimaryText>
                </View>
             </View>
            <ScrollView style={style.formContainer}>
                <TouchableOpacity
                    style={style.checkboxContainer}
                    onPress={() => { 
                        setChecked('into'); 
                        setData({...data, into: true});
                    }}
                >

                    <PrimaryText className={['text-y-center', 'text-white']}>Ingreso</PrimaryText>
                    <RadioButton
                        label="First item"
                        value="into"
                        color={themes.colors.primary}
                        status={ checked === 'into' ? 'checked' : 'unchecked' }
                        onPress={() => {                        
                            setChecked('into'); 
                            setData({...data, into: true });
                        }}
                    />

                </TouchableOpacity>
                <TouchableOpacity
                    style={style.checkboxContainer}
                    onPress={() => {                        
                            setChecked('into'); 
                            setData({...data, into: false });
                        }}
                >
                    <PrimaryText className={['text-y-center', 'text-white']}>Salida</PrimaryText>
                    <RadioButton
                        label="out item"
                        value="out"
                        color={themes.colors.primary}
                        status={ checked === 'out' ? 'checked' : 'unchecked' }
                        onPress={() => {                        
                            setChecked('into'); 
                            setData({...data, into: false });
                        }}
                    />
                </TouchableOpacity>
                <View style={style.dropDown}>
                    <Dropdown items={typeItems} onValueChange={(e) => setData({...data, carType: e})} placeholder={{ label: "Tipo de vehiculo", value: null }} />
                </View>
                <GeneralInput placeholder="Placa"  value={data.identification} style={style["mb-10"]} onChange={(e) => setData({...data, identification: e})} />
                <GeneralInput placeholder="Estado de vehiculo" onChange={(e) => setData({...data })} />
                <TouchableOpacity style={style.checkboxContainer}  onPress={() => {setIsEnabled(!isEnabled); setData({ ...data, autorization: isEnabled })}}>
                    <PrimaryText className={['text-y-center', 'text-white']}>Se autoriza el ingreso</PrimaryText>
                    <Switch
                        trackColor={{false: themes.colors.gray[600], true: themes.colors.gray[400]}}
                        thumbColor={isEnabled ? themes.colors.primary : themes.colors.gray[400]}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsEnabled(!isEnabled)}
                        value={isEnabled}
                        
                    />
                </TouchableOpacity>
                <GeneralInput placeholder="Quien autoriza" style={style["mb-10"]} value={data.worker} onChange={(e) => setData({...data, worker: e})} />
                <GeneralInput placeholder="Descripcion"  value={data.Quien} onChange={(e) => setData({...data, description: e})} />
                <PrimaryButton onPress={() => submitHandler()} className={['text-center', 'p-10', 'rounded-full', 'mt-15']} text="Enviar" />
            </ScrollView>
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
    dropDown: {
        borderRadius: themes.rounded["rounded-full"], 
        overflow: 'hidden', 
        paddingBottom: 5, 
        marginBottom: 10, 
        marginTop: 10,
    },
    checkboxContainer: {
        marginLeft: 10, 
        flexDirection:'row',
        justifyContent: 'space-between',
        alignContent: 'center' 
    },
    titleText: { 
        textAlign: 'right',
        color: themes.colors.primary 
    },
    formContainer: {
        padding: 15,
        maxHeight: '87.9%'
    },
    textContainer: {
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingRight: 12, 
        marginLeft: 12, 
    },
    image: {
        width: 100, 
        height: 100, 
        marginLeft: 'auto', 
        marginRight: 'auto',
    },
    "mb-10": {
        marginBottom: 10
    },
    navigation: {
        paddingTop: Constants.statusBarHeight + 5,
        backgroundColor: themes.colors.secondary,
        padding: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: "row",
    },
    icon: {
        color: themes.colors.white,
        width: 30,
        height: 30
    },
    iconNav: {
        backgroundColor: themes.colors.primary,
        borderRadius: themes.rounded["rounded-full"],
        padding: 6,
        marginTop: 'auto',
        marginBottom: 'auto',
        width: 40,
        height: 40
    }
})
