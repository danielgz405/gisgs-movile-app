import { ArchiveBoxArrowDownIcon, ClockIcon, TruckIcon, UserGroupIcon, XCircleIcon } from "react-native-heroicons/solid";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import { PrimaryText, Title } from "../../utils/Texts/Texts";
import { FlatList, View, Image, StyleSheet, TouchableNativeFeedback, Pressable } from "react-native";
import { PrimaryButtonIcon } from "../../utils/Buttons/Buttons";
import { themes } from "../../assets/themes/themes";
import Constants from "expo-constants";
import { useNavigate } from "react-router-native";
import { Modal } from "react-native";
import { useState } from "react";
import { Text } from "react-native-svg";

const events = [
    {
        type: 'box',
        vis_names: 'Jose Maria',
        vis_lastName: 'Motta Rodrigez',
        identification: '145236987',
        decription: 'anthing',
    },
    {
        type: 'ingreso',
        vis_names: 'Jose Maria',
        vis_lastName: 'Motta Rodrigez',
        identification: '145236987',
        decription: 'anthing',
    },
    {
        type: 'ingreso',
        vis_names: 'Jose Maria',
        vis_lastName: 'Motta Rodrigez',
        identification: '145236987', 
        decription: 'anthing',
    },
    {
        type: 'vehiculo',
        vis_names: 'Jose Maria',
        vis_lastName: 'Motta Rodrigez',
        identification: '145236987',
        decription: 'anthing',
    }
]

function Event({ item }){
    return (<View style={style.events} >
        <View style={style.icon}>
            {item?.type === 'vehiculo' ? <TruckIcon size={25} color={themes.colors.white} /> : item?.type === 'ingreso' ? <UserGroupIcon size={25} color={themes.colors.white} /> : <ArchiveBoxArrowDownIcon size={25} color={themes.colors.white} />}
        </View>
        <View style={style.eventsText}>
            <PrimaryText style={{marginRight: 'auto'}} className={['text-white']} >{item?.decription}</PrimaryText>
            <View style={style.descriptionEvent}>
                <PrimaryText className={['text-gray-400']} >{item?.decription}</PrimaryText>
                <ClockIcon style={{...style["mx-10"], ...style["my-auto"]}} size={10} color={themes.colors.white} />
                <PrimaryText style={{marginRight: 'auto'}} className={['text-gray-400']} >{item?.decription}</PrimaryText>
            </View>
        </View>
    </View>)
}

export default function Home() {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={style.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <View style={style.navigationModal}>
                            <PrimaryText style={style.modalText}>Eventos</PrimaryText>
                            <Pressable
                                style={{marginLeft: 'auto'}}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <XCircleIcon size={40} color={themes.colors.emerald[700]} />
                            </Pressable>
                        </View>
                        <View style={style.modalContend}>
                            <TouchableNativeFeedback onPress={() => navigate('/Cars')} >
                                <View style={style.icon}>
                                    <TruckIcon size={25} color={themes.colors.white} />   
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => navigate('/Visitor')} >
                                <View style={style.icon}>
                                    <UserGroupIcon size={25} color={themes.colors.white} />
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={() => navigate('/Package')} >
                                <View style={style.icon}>
                                    <ArchiveBoxArrowDownIcon size={25} color={themes.colors.white} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={style.navigation}>
                <View style={style.userContainer}>
                    <TouchableNativeFeedback onPress={() => navigate('/Profile')}>
                        <Image style={style.image} source={{uri: 'https://ui-avatars.com/api/?name=User&rounded=true&background=047857&color=fff&bold=true'}} />
                    </TouchableNativeFeedback>
                    <Title style={{        
                        marginBottom: 'auto',
                        marginTop: 'auto',
                    }}>User</Title>
                </View>
                <PrimaryButtonIcon onPress={() => setModalVisible(true)} className={['bg-transparent']} style={{        
                        marginBottom: 'auto',
                        marginTop: 'auto',
                    }}>
                    <PlusCircleIcon size={40} color={themes.colors.primary} />
                </PrimaryButtonIcon>
            </View>
            <View style={style.container}>
                <FlatList data={events} renderItem={({ item }) => <Event item={item} />} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '95%',
    },
    formContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    eventsText: {
        marginTop: 'auto',
        width: '100%',
        marginBottom: 'auto',
    },
    "my-auto": {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    navigationModal: {
        flexDirection: "row",
        width: "100%",
    },
    'mx-10': {
        marginLeft: 10,
        marginRight: 10,
    },
    navigation: {
        paddingTop: Constants.statusBarHeight + 2,
        backgroundColor: themes.colors.secondary,
        padding: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        flexDirection: "row",
    },
    modalContend: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'space-between',
        flexDirection: "row",
    },
    userContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center',
    },
    image: {
        width: 50, 
        height: 50, 
        marginRight: 8,
        marginBottom: 'auto',
        marginTop: 'auto',
    },
    "mb-10": {
        marginBottom: 10
    },
    events: {
        flexDirection: "row", 
        justifyContent: 'space-between', 
        alignContent: 'center',
        padding: 15,
        marginBottom: 1,
        borderBottomColor: themes.colors.slate[500],
        borderBottomWidth: 1,
    },
    descriptionEvent: {
        flexDirection: 'row',
        width: '100%'
    },
    icon: {
        backgroundColor: themes.colors.primary,
        borderRadius: themes.rounded["rounded-full"],
        padding: 8,
        marginRight: 10,
        width: 40,
        height: 40,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 10,
        width: '80%',
        backgroundColor: themes.colors.white,
        borderRadius: themes.rounded["rounded-lg"],
        padding: 5,
        alignItems: 'center',
        shadowColor: themes.colors.gray[600],
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
      },
})
