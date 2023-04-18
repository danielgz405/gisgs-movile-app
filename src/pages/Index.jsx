import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import Welcome from "../components/Home/Welcome";
import Login from "./login/login";
import Home from "./Home/Home";
import ProfileScreen from "./profile/Profile";
import Automibile from "./automibile/automobile";
import Visitor from "./Visitor/Visitor";
import Package from "./Package/Package";

export default function Main(){
    return (
        <View style={{ flex: 1 }}>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Profile' element={<ProfileScreen />} />
                <Route path='/Cars' element={<Automibile />} />
                <Route path='/Visitor' element={<Visitor />} />
                <Route path='/Package' element={<Package />} />
            </Routes>
        </View>
    )
} 