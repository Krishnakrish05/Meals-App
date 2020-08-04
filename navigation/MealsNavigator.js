import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import Categories from "../screens/Categories"
import CategoryMeal from "../screens/CategoryMeal"
import MealDetail from "../screens/MealDetail"
import Colors from "../constants/Colors"
import {createBottomTabNavigator} from "react-navigation-tabs"
import Favourites from "../screens/Favourites"
import {MaterialCommunityIcons,MaterialIcons} from "@expo/vector-icons"
import React from "react"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import {Platform} from "react-native"
import {createDrawerNavigator} from "react-navigation-drawer"
import Filters from "../screens/Filters"
import {Text,View} from "react-native"

const defaultnavigation={
        headerStyle:{
            backgroundColor:Colors.primary,
        },
        headerTitleStyle:{
            fontFamily:"open-sans-bold",
            fontSize:19
        },
        headerTintColor:"black"
}




const MealsNavigator=createStackNavigator({
    Category: {
        screen:Categories,
    },

    MealCategory:{
        screen:CategoryMeal,
       
    },
    Detail:MealDetail,
    },
    {
        defaultNavigationOptions:defaultnavigation

})

const FavNavigator=createStackNavigator({
    Favourite:Favourites,
    Detail:MealDetail
    

},{ defaultNavigationOptions:defaultnavigation
}
)


const tabscreen={
    Dishes:{screen:MealsNavigator,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return ( <MaterialCommunityIcons name="food" size={30} color={tabInfo.tintColor}/>
            );
        },tabBarColor:Colors.primary,
        tabBarLabel:<Text style={{fontFamily:'open-sans-bold'}}>Dishes</Text>
    }},
    Favourite:{screen:FavNavigator,navigationOptions:{
        
        tabBarIcon:(tabInfo)=>{
            return ( <MaterialIcons name="favorite" size={26} color={tabInfo.tintColor}/>
            );
        },tabBarColor:Colors.primary,
        tabBarLabel:<Text style={{fontFamily:'open-sans-bold'}}>Favourite</Text>
        }}
}

const MealFavNavigator= Platform.OS==="android"?createMaterialBottomTabNavigator(tabscreen,{
    activeColor:"black",
    shifting:true
    
}): createBottomTabNavigator(
    tabscreen,
{
    tabBarOptions:{
        labelStyle:{
            fontFamily:"open-sans"
        },
        activeTintColor:Colors.secondary,
        activeBackgroundColor:'#F9E9FF'
    }

})

const FilterNavigator=createStackNavigator({
    Filter:Filters
},{
    defaultNavigationOptions:defaultnavigation
})

const MainNavigator=createDrawerNavigator({
    Dishes:MealFavNavigator,
    Filter:FilterNavigator

},{
    contentOptions:{
        activeTintColor:Colors.secondary,
        
        labelStyle:{
            fontFamily:"open-sans-bold",
            fontSize:17
        }
    }
})

export default createAppContainer( MainNavigator)