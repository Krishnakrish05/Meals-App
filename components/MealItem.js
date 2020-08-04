import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from "react-native";

const MealItem=props=>{
    return(
        <View style={styles.mealitem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealrow,...styles.mealheader}}>
            <ImageBackground source={{uri:props.image}} style={styles.bgimage}>

      <View style={styles.titlecontainer}>
        <Text style={styles.title}>
            {props.title}
        </Text>
        </View>
        </ImageBackground>
        </View>
        <View style={{...styles.mealrow,...styles.mealdetail}}>
          <Text style={{fontFamily:"open-sans-bold"}}>
              {props.duration} min
          </Text>
          <Text style={{fontFamily:"open-sans"}}>
              {props.complexity.toUpperCase()}
          </Text>
          <Text style={{fontFamily:"open-sans"}}>
              {props.affordability.toUpperCase()}
          </Text>
        </View>
        
    </View>
    </TouchableOpacity>
    </View>
    )

}
const styles=StyleSheet.create({
    mealrow:{
        flexDirection:"row",
        

    },
    bgimage:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-end"

    },
    mealheader:{
        height:"85%",

    },
    mealdetail:{
           paddingHorizontal:10,
           justifyContent:"space-around",
           height:"15%",
           alignItems:"center"
    },

    mealitem:{
         height:200,
         width:"100%" ,
         backgroundColor:"#E8E8E8",
         borderRadius:10,
         overflow:"hidden",
         paddingHorizontal:10,
         paddingVertical:8,
         marginVertical:10
    },
    titlecontainer:{
        backgroundColor:"black",
        paddingHorizontal:12,
        paddingVertical:3,
    
    },
    title:{
        fontFamily:"open-sans-bold",
        fontSize:18,
        color:"white",
        textAlign:"center",
        opacity:0.7
    }
})

export default MealItem