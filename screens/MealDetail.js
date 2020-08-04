import React,{useEffect,useCallback} from "react";
import {ScrollView,View,Text,StyleSheet,Button,Image} from "react-native";
import {useSelector,useDispatch} from "react-redux"
import {HeaderButtons,Item} from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import {toggleFavourite} from "../store/actions/meals"


const ListItem=props=>{
    return <View style={styles.list}>
        <Text>
            {props.children}
        </Text>
    </View>
}
const MealDetail=props=>{
    const mealId=props.navigation.getParam("mealId")

    const availableMeals=useSelector(state=>state.meals.meals)

    const currentfavourite=useSelector(state=>state.meals.favouriteMeals.some(meal=>meal.id===mealId))

    const selectedmeal=availableMeals.find(meal=>meal.id===mealId)


   const dispatch = useDispatch()
   const toggleFavouriteHandler=useCallback(()=>{
       dispatch(toggleFavourite(mealId))
   },[dispatch,mealId])
   

    useEffect(()=>{
   // props.navigation.setParams({mealTitle:selectedmeal.title})
   props.navigation.setParams({togglehandler:toggleFavouriteHandler})
     },[selectedmeal])

     useEffect(()=>{
         props.navigation.setParams({favo:currentfavourite})

     },[currentfavourite])

    return(
        <ScrollView>
            <Image source={{uri:selectedmeal.imageUrl}} style={styles.image}/>
            <View style={styles.detail}>
          <Text style={{fontFamily:"open-sans-bold"}}>
              {selectedmeal.duration} min
          </Text>
          <Text style={{fontFamily:"open-sans"}}>
              {selectedmeal.complexity.toUpperCase()}
          </Text>
          <Text style={{fontFamily:"open-sans"}}>
              {selectedmeal.affordability.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
    {selectedmeal.ingredients.map(ingredient=><ListItem key={ingredient}>✔ {ingredient}</ListItem>)}
        <Text style={styles.title}>Steps to Make</Text>
        {selectedmeal.steps.map(step=><ListItem key={step}> 🍚  {step}</ListItem>)}
        
        </ScrollView>
    )

}
MealDetail.navigationOptions=(navigationData)=>{
  // const mealId= navigationData.navigation.getParam("mealId")
   const mealTitle=navigationData.navigation.getParam("mealTitle")
   const togglehandler=navigationData.navigation.getParam("togglehandler")
   const favo=navigationData.navigation.getParam("favo")
  // const selectedcategory=MEALS.find(meal=>meal.id===mealId)
   return{
      
        headerTitle:mealTitle ,
        headerRight:()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favourite" iconName={favo?"ios-star":"ios-star-outline"} onPress={togglehandler}/>
        </HeaderButtons>
        )
        
       
   }

}

const styles=StyleSheet.create({
 image:{
     width:"100%",
     height:180

 },
 detail:{
     flexDirection:"row",
     padding:15,
     justifyContent:"space-around"

 },
 title:{
     fontFamily:"open-sans-bold",
     fontSize:18,
     textAlign:"center"

 },
 list:{
     marginVertical:10,
     marginHorizontal:10,
     borderColor:"#9AECDB",
     borderWidth:0.9,
     padding:10
 }

})
export default MealDetail
