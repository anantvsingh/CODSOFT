const { View, Text, StyleSheet, Button } = require("react-native");
import {useSelector,useDispatch} from 'react-redux'
import { entityCompleted, entityIncomplete,deleteEntity, addEntity } from '../redux/entityData'
import ToDoForm from '../components/form/ToDoFrom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import Input from '../components/form/Input';

let entity=[];
function ManageToDo({route,navigation}){
    const dummy=useSelector(state=>state.data.dummy)
    const dispatch=useDispatch();
    const completed=useSelector(state=>state.data.completed)
    const entityId=route.params?.entityid;
    const idChecke=completed.includes(entityId);


    function onCheckedHandler(){
        if(idChecke){
            dispatch(entityIncomplete({id:entityId}))
        }
        else{
            dispatch(entityCompleted({ id: entityId }))
        }
        console.log(completed)
    }

    function onDeleteHandler(){
        if(idChecke){
            dispatch(entityIncomplete({id:entityId}))
        }
        dispatch(deleteEntity({id:entityId}))
        console.log(dummy)
    }

    
    
        const[inputValues,setInputValues]=useState({
            title:'',
            description:'',
            date:''
        })
        function inputHandler(inputType,value){
            setInputValues((currValue)=>{
                return {...currValue,
                [inputType]:value}
            })
        }
        const onSaveHandler=async()=>{
            entity.push(inputValues);
            await AsyncStorage.setItem('Entity',JSON.stringify(entity));
            // console.log(JSON.stringify(entity))
            navigation.goBack();
        }
    return(
        <View>
            <Text>Manage</Text>
            <Input label={'Title'} inputConfigs={{onChangeText:inputHandler.bind(this,'title') ,value:inputValues.title}}/>
            <Input label={'Date'} inputConfigs={{placeholder:'YYYY-MM-DD',onChangeText:inputHandler.bind(this,'date'),value:inputValues.date
}}/>
            <Input label={'Description'} inputConfigs={{onChangeText:inputHandler.bind(this,'description'),value:inputValues.description
}}/>
            <Button title="Save" onPress={onSaveHandler}/>
            <Button title='Completed' onPress={onCheckedHandler}/>
            <Button title='delete' onPress={onDeleteHandler}/>
        </View>
    )
}


export default ManageToDo