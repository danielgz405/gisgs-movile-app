import { View, Image, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { PrimaryLink } from "../../utils/Buttons/Buttons";
import { themes } from "../../assets/themes/themes";
import { PrimaryText, Title } from "../../utils/Texts/Texts";

export default function Welcome(){
    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image source={require('../../assets/images/favicon.png')} style={style.image} />
            </View>
            <View style={style.textContainer}>
                <Title className={['text-white', 'text-center', 'extra-bold', 'text-4xl']} style={{ marginBottom: 15 }}>Gisgs Consulting</Title>
                <PrimaryText className={['text-white', 'text-center']}>Bienvenido, en este software podras actualizar la bitacora del dia</PrimaryText>
            </View>
            <PrimaryLink to='/Login' className={['text-center', 'p-10', 'm-15']} text="Entrar" />
        </View>
    )
} 

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignContent: 'center' 
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        backgroundColor: themes.colors.secondary,
        borderBottomLeftRadius: themes.rounded["rounded-full"],
        borderBottomRightRadius: themes.rounded["rounded-full"],
        justifyContent: 'flex-end',
        alignContent: 'center'
    },
    image: {
        width: 100, 
        height: 100, 
        marginLeft: 'auto', 
        marginRight: 'auto',
        transform: [{translateY: 40}]
    },
    textContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    }
})