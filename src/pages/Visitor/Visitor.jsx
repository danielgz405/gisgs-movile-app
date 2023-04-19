import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity, ScrollView, ToastAndroid, Vibration, Alert } from "react-native";
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
import { insertVisitor } from "../../api/events/events";

export default function Visitor ({ auth }) {
    const navigate = useNavigate();
    const typeItems = [
        { label: "Cédula", value: "CC" },
        { label: "Tarjeta de identidad", value: "TI" },
        { label: "Pasaporte", value: "P" },
        { label: "Cédula de extranjería", value: "CE" },
    ]
    const [data, setData] = useState({
        "into": true,
        "type-identification": "",
        "identification": "",
        "tower": "",
        "apto": "",
        "floor": "",
        "automobile": false,
        "autorization": false,
        "worker": `${auth.name}`,
        "description": ""
    });
    const [isEnabled, setIsEnabled] = useState(false)
    const [isVehicle, setIsVehicle] = useState(false)
    const [checked, setChecked] = useState('into')

    const submitHandler = () => {
        if (!data["type-identification"]) {
            ToastAndroid.show('Selecciona un tipo de identificacion', ToastAndroid.SHORT);
            return
        }
        if (!data.identification) {
            ToastAndroid.show('Ingresa una identificacion', ToastAndroid.SHORT);
            return
        }
        if (!data.tower) {
            ToastAndroid.show('Ingresa una torre', ToastAndroid.SHORT);
            return
        }
        if (!data.apto) {
            ToastAndroid.show('Ingresa una apto', ToastAndroid.SHORT);
            return
        }
        if (!data.floor) {
            ToastAndroid.show('Ingresa un piso', ToastAndroid.SHORT);
            return
        }
        if (!data.worker) {
            ToastAndroid.show('Ingresa un a la persona que autorizo', ToastAndroid.SHORT);
            return
        }
        if (!data.description) {
            ToastAndroid.show('Ingresa una descripcion', ToastAndroid.SHORT);
            return
        }

        insertVisitor(data).then(() => {
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
                    <PrimaryText className={['text-sm']}>Aquí podrá registrar la entrada y salida de visitantes</PrimaryText>
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
                    <Dropdown items={typeItems} onValueChange={(e) => setData({...data, "type-identification": e})} placeholder={{ label: "Tipo de identificacion", value: null }} />
                </View>
                <GeneralInput placeholder="Numero de identificacion"  value={data.identification} style={style["mb-10"]} onChange={(e) => setData({...data, identification: e})} />
                <View style={style.tower}>
                    <GeneralInput placeholder="Torre"  value={data.tower} style={style.dropDownRow} onChange={(e) => setData({...data, tower: e})} />
                    <GeneralInput placeholder="Piso"  value={data.floor} style={style.dropDownRow} onChange={(e) => setData({...data, floor: e})} />
                    <GeneralInput placeholder="Apto"  value={data.apto} style={style.dropDownRow} onChange={(e) => setData({...data, apto: e})} />
                </View>
                <TouchableOpacity style={style.checkboxContainer}  onPress={() => {setIsVehicle(!isEnabled); setData({ ...data, autorization: isEnabled })}}>
                    <PrimaryText className={['text-y-center', 'text-white']}>Se autoriza el ingreso</PrimaryText>
                    <Switch
                        trackColor={{false: themes.colors.gray[600], true: themes.colors.gray[400]}}
                        thumbColor={isEnabled ? themes.colors.primary : themes.colors.gray[400]}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setIsEnabled(!isEnabled); setData({ ...data, autorization: isEnabled })}}
                        value={isEnabled}
                        
                    />
                </TouchableOpacity>
                <TouchableOpacity style={style.checkboxContainer}  onPress={() => {setIsVehicle(!isVehicle); setData({ ...data, automobile: isEnabled })}}>
                    <PrimaryText className={['text-y-center', 'text-white']}>Ingresa con vehiculo</PrimaryText>
                    <Switch
                        trackColor={{false: themes.colors.gray[600], true: themes.colors.gray[400]}}
                        thumbColor={isVehicle ? themes.colors.primary : themes.colors.gray[400]}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {setIsVehicle(!isVehicle); setData({ ...data, automobile: isEnabled })}}
                        value={isVehicle}
                        
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
    tower: {
        flexDirection: 'row',
        width: '100%',
    },
    dropDownRow: {
        borderRadius: themes.rounded["rounded-full"], 
        overflow: 'hidden', 
        width: '31%',
        paddingBottom: 5, 
        marginBottom: 10, 
        marginLeft: 'auto', 
        marginRight: 'auto',
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
