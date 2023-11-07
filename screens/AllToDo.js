const { View, Text ,StyleSheet,FlatList, Button} = require("react-native");
import {useDispatch, useSelector} from 'react-redux'
import EntityTile from '../components/EntityTile';
import { entityCompleted, entityIncomplete } from '../redux/entityData';
import {Icon} from 'react-native-vector-icons/Ionicons'
import CheckBox from '../components/CheckBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
// import { dummy } from '../data/dummy';



function AllToDo({navigation}){
    const isFocused=useIsFocused();
    const[entityList,setEntityList]=useState([]);
    const dummy=useSelector(state=>state.data.dummy)
    const completed=useSelector(state=>state.data.completed)
    const dispatch=useDispatch();
    // function onCheckedHandler({id}){
    //     const idChecked=completed.includes(id);
    //     if(idChecked){
    //         dispatch(entityIncomplete({eid:id}))
    //     }
    //     else{
    //         console.log(id)
    //         dispatch(entityCompleted({eid:id}))
    //     }
        // console.log(completed)
        // 
    // }
    function renderEntity(itemData){
        return <EntityTile {...itemData.item} />
    }
    useEffect(()=>{
        getData();
    },[isFocused])
    const getData=async()=>{
        const entityy=await AsyncStorage.getItem('Entity');
        try{
            const parsedD=JSON.parse(entityy)
            setEntityList(parsedD);
            console.log(parsedD)
        }
        catch(e){
            console.error('error',e)
        }
    }
    
    return (
        <View style={styles.container}>
        <FlatList data={entityList} keyExtractor={(item)=>item.id} renderItem={renderEntity}/>
        {/* <Icon name="add" color='black' size={30}/> */}
        <Button title='add' color={'black'} onPress={()=>navigation.navigate('Manage')}/>
    </View>
    )
}

export default AllToDo

const styles=StyleSheet.create({
    container:{
        
        alignContent:"center",
        justifyContent:"center"
    }
})