import React from "react"
import {View,Text,StyleSheet} from "react-native"
import {HeaderButton} from "react-navigation-header-buttons"
import {Ionicons} from "@expo/vector-icons"
import Colors from "../constants/Colors"

const CustomHeaderButton=props=>{
    return(
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={26} color="#2C3335"/>
    )
}

const styles=StyleSheet.create({

})
export default CustomHeaderButton