import React from "react"
import {View,Text,StyleSheet,FlatList} from 'react-native'
import MealItem from "./MealItem"
import {useSelector} from "react-redux"

const MealList =props=>{
    const favouritemeal=useSelector(state=>state.meals.favouriteMeals)

    const renderMealItem=itemData=>{
        const isfavo=favouritemeal.some(meal=>meal.id===itemData.item.id)
        return <MealItem title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} 
        affordability={itemData.item.affordability}image={itemData.item.imageUrl} onSelectMeal={()=>{
            props.navigation.navigate({routeName:"Detail",params:{
                mealId:itemData.item.id,
                mealTitle:itemData.item.title,
                favo:isfavo
            }})
        }} />
           
        
    }
    return(
        <View style={styles.screen}>
        <FlatList style={{width:"100%"}}data={props.listData} renderItem={renderMealItem}/>
   
    </View>
    )

}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }

})

export default MealList