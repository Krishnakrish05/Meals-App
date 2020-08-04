import React from "react"
import {TouchableOpacity,View,Text,StyleSheet} from "react-native"

const Categorygrid=props=>{
    return(
        <TouchableOpacity style={styles.griditem} onPress={props.onSelect}>
             <View style={{...styles.container,...{backgroundColor:props.color}}} >
            <Text style={styles.font}> 
                {props.title}
            </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    griditem:{
        flex:1,
        margin:15,
        height:150,
        overflow:"hidden",
        elevation:5,
        shadowColor:"black",
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,

    },
    container:{
        flex:1,
        borderRadius:8,
        padding:15,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        shadowColor:"black",
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
    },
    font:{
        fontFamily:"open-sans-bold",
        fontSize:18,
        textAlign:"right"
    }

})

export default Categorygrid