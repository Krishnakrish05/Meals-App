import React from "react";
import {View,Text,StyleSheet,Button,FlatList,TouchableOpacity} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/Colors"
import Categorygrid from "../components/Categorygrid"
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton"



const Categories=props=>{
    const renderGridItem=(itemData)=>{
        return (
            <Categorygrid title={itemData.item.title} color={itemData.item.color} onSelect={()=>{
                props.navigation.navigate({routeName:"MealCategory",params:{
                    categoryId:itemData.item.id
               
                }})
            }}/>
        )
    }
   
    return(
        <FlatList data={CATEGORIES}  renderItem={renderGridItem} numColumns={2}/>
    )

}
Categories.navigationOptions=navData=>{
    return{
    headerTitle:"Category Dishes",
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
    

})
export default Categories