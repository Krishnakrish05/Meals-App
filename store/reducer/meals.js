import {MEALS} from "../../data/dummy-data"
import {TOGGLE_FAVOURITE,SET_FILTER} from "../actions/meals"
const initialState={
    meals:MEALS,
    fileredMeals:MEALS,
    favouriteMeals:[],
}

const mealsReducer=(state=initialState,action)=>{
     switch(action.type){
         case TOGGLE_FAVOURITE:
             const existingIndex=state.favouriteMeals.findIndex(meal=>meal.id===action.mealId)
             if(existingIndex>=0){
                 const updatedMeals=[...state.favouriteMeals];
                 updatedMeals.splice(existingIndex,1)
                 return{...state,favouriteMeals:updatedMeals}
             }else{
                 const meal=state.meals.find(meal=>meal.id===action.mealId)
                 return{...state,favouriteMeals:state.favouriteMeals.concat(meal)}
             }
             case SET_FILTER:
                 const appliedFilters=action.filters
                 const updatefilteredMeals=state.meals.filter(meal=>{
                     if(appliedFilters.gluternFree && !meal.isGlutenFree){
                         return false
                     }
                     if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                        return false
                    }
                    if(appliedFilters.vegan && !meal.isVegan){
                        return false
                    }
                    if(appliedFilters.vegeterian && !meal.isVegetarian){
                        return false
                    }
                    return true

                 })
                 return {...state,fileredMeals:updatefilteredMeals}
         default:
                 return state

     }
    return state;
}

export default mealsReducer