import React,{useState,useEffect,useCallback} from "react";
import {View,Text,StyleSheet,Switch} from "react-native";
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton"
import Colors from "../constants/Colors"
import {useDispatch} from "react-redux"
import {setFilters} from "../store/actions/meals"

const FilterSwitch=props=>{
    return(
        <View style={styles.filtercontainer}>
            <Text> {props.label}</Text>
            <Switch trackColor={{true:Colors.secondary,false:Colors.primary}}
            thumbColor="#DAE0E2" value={props.state} onValueChange={props.onChange}
            />
            </View>
    )
}

const Filters=props=>{
    const {navigation}=props
    const [isGlutenFree,setIsGlutenFree]=useState(false)
    const [islactose,setIslactose]=useState(false)
    const [isvegan,setIsvegan]=useState(false)
    const [isvegeterian,setIsvegeterian]=useState(false)

    const dispatch=useDispatch()

    const saveFilters=useCallback(()=>{
        const appliedFilters={
            glutenFree:isGlutenFree,
            lactoseFree:islactose,
            vegan:isvegan,
            vegeterian:isvegeterian
        }
        dispatch(setFilters(appliedFilters))
    },[isGlutenFree,islactose,isvegan,isvegeterian,dispatch]
    )

    useEffect(()=>{
        navigation.setParams({save:saveFilters})
    },[saveFilters])



    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Filter your Dishes</Text>
            
                <FilterSwitch label="Gluten-Free" state={isGlutenFree} onChange={newValue=>setIsGlutenFree(newValue)}/>
                <FilterSwitch label="Lactose-Free" state={islactose} onChange={newValue=>setIslactose(newValue)}/>
                <FilterSwitch label="is-Vegan" state={isvegan} onChange={newValue=>setIsvegan(newValue)}/>
                <FilterSwitch label="is-Vegeterian" state={isvegeterian} onChange={newValue=>setIsvegeterian(newValue)}/>



            
      </View>
    )

}
Filters.navigationOptions=navData=>{
    return{
    headerTitle:"Filters",
    headerLeft:()=>(
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="md-menu" onPress={()=>{
            navData.navigation.toggleDrawer()
        }}/>

    </HeaderButtons>
    
    ),
    headerRight:()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Save" iconName="ios-save" 
            onPress={navData.navigation.getParam("save")}/>
        </HeaderButtons>
    )
    
    }
    
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
    },
    title:{
        fontFamily:"open-sans-bold",
        fontSize:18,
        margin:10,
        textAlign:"center"

    },
    filtercontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:13,
        width:"70%"


    }

})
export default Filters
