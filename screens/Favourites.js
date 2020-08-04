import React from "react";
import {View,Text,StyleSheet} from "react-native";
import MealList from "../components/MealList"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton"
import {useSelector} from "react-redux"


const Favourites=props=>{
    const favMeals=useSelector(state=>state.meals.favouriteMeals)

    if(favMeals.length=== 0 || !favMeals){
        return(
            <View style={styles.favoplanes} >
                <Text style={styles.favoplane}>
                    Your Favourites is Empty
                </Text>
            </View>
        )
    }
    
    return(
       <MealList listData={favMeals} navigation={props.navigation}/>
    )

}

Favourites.navigationOptions=navData=>{
    return{
    headerTitle:"Your Favourites",
    headerLeft:()=>(
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="md-menu" onPress={()=>{
            navData.navigation.toggleDrawer()
        }}/>

    </HeaderButtons>
    
    )
    }
    
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    favoplane:{
        fontFamily:"open-sans",
        fontSize:16,
        textAlign:"center"
    },
    favoplanes:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }

})
export default Favourites
