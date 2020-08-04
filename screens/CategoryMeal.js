import React from "react";
import {View,Text,StyleSheet,Button,FlatList} from "react-native"; 
import {CATEGORIES} from "../data/dummy-data"
import {useSelector} from 'react-redux'
import Colors from "../constants/Colors"
import MealItem from "../components/MealItem"
import MealList from "../components/MealList"

const CategoryMeal=props=>{
   
   
  const availableMeals= useSelector(state=>state.meals.fileredMeals)

   const catId= props.navigation.getParam("categoryId")

   
  const displayedMeals=availableMeals.filter(
      meal=>meal.categoryIds.indexOf(catId)>=0
  )

    if(displayedMeals.length===0 || !displayedMeals){
      return(
        <View style={styles.plainview}>
          <Text style={styles.plaintext}>
            There is No Items to show by your filter
          </Text>
        </View>
      )
    }
  
    return(
        <MealList listData={displayedMeals} navigation={props.navigation}/>
       
    )

  }
CategoryMeal.navigationOptions=navigationData=>{
  const catId =  navigationData.navigation.getParam("categoryId");
   const selectedCategory = CATEGORIES.find(cat=>cat.id===catId);
   return{
       headerTitle:selectedCategory.title ,
       
   };
   


}

const styles=StyleSheet.create({
  plaintext:{
    fontFamily:"open-sans",
    textAlign:"center",
    fontSize:16
  },
  plainview:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }

})
export default CategoryMeal