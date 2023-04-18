import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { themes } from "../../assets/themes/themes";
import { useState } from "react";
import { GeneralInput } from "../../utils/Inputs/Inputs";
import { PrimaryText, Title } from "../../utils/Texts/Texts";
import { Link } from "react-router-native";
import { ArrowSmallLeftIcon } from "react-native-heroicons/solid";
import { Dropdown } from "../../utils/Inputs/Drop";
import { Checkbox } from 'react-native-paper';
import { PrimaryButton } from "../../utils/Buttons/Buttons";

export default function Package () {
    const typeItems = [
        { label: "Carro", value: "Carro" },
        { label: "Camión", value: "Camión" },
        { label: "Furgón", value: "Furgón" },
        { label: "Moto", value: "Moto" },
        { label: "Bicicleta", value: "Bicicleta" },
    ]
    const [data, setData] = useState({
        Placa: '',
        States: '',
        Who: '',
        carType: '',
    });
    const [isEnabled, setIsEnabled] = useState(false)
    return (
        <View>
             <View style={style.navigation}>
                <Link to="/Home" style={style.iconNav}>
                    <ArrowSmallLeftIcon size={30} color={themes.colors.white} />
                </Link>
                <View style={style.textContainer}>
                    <Title className={['extra-bold', 'text-2xl']} style={style.titleText}>Gisgs Consulting</Title>
                    <PrimaryText className={['text-sm']}>Aquí podrá registrar la entrada de paquetes</PrimaryText>
                </View>
             </View>
            <ScrollView style={style.formContainer}>
                <GeneralInput placeholder="Nombre de la empresa"  value={data.Placa} style={style["mb-10"]} onChange={(e) => setData({...data,Placa : e})} />
                <GeneralInput placeholder="Nombre del mensajero"  value={data.Placa} style={style["mb-10"]} onChange={(e) => setData({...data,Placa : e})} />
                <View style={style.dropDown}>
                    <Dropdown items={typeItems} onValueChange={(e) => setData({...data, carType: e})} placeholder={{ label: "Tipo de identificacion", value: null }} />
                </View>
                <GeneralInput placeholder="Numero de identificacion"  value={data.Placa} style={style["mb-10"]} onChange={(e) => setData({...data,Placa : e})} />
                <GeneralInput placeholder="Nombre del receptor"  value={data.Placa} style={style["mb-10"]} onChange={(e) => setData({...data,Placa : e})} />

                <View style={style.tower}>
                    <GeneralInput placeholder="Torre"  value={data.Placa} style={style.dropDownRow} onChange={(e) => setData({...data,Placa : e})} />
                    <GeneralInput placeholder="Oficina"  value={data.Placa} style={style.dropDownRow} onChange={(e) => setData({...data,Placa : e})} />
                    <GeneralInput placeholder="Apto"  value={data.Placa} style={style.dropDownRow} onChange={(e) => setData({...data,Placa : e})} />
                </View>
                <GeneralInput placeholder="Lugar de custodia"  value={data.Placa} style={style["mb-10"]} onChange={(e) => setData({...data,Placa : e})} />
                <GeneralInput placeholder="Quien autoriza" style={style["mb-10"]} value={data.Quien} onChange={(e) => setData({...data, Who: e})} />
                <GeneralInput placeholder="Descripcion"  value={data.Quien} onChange={(e) => setData({...data, Who: e})} />
                
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
