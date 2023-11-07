import {Pressable,View,Text, StyleSheet} from 'react-native'
// import CheckBox from './CheckBox'
import Icon from 'react-native-vector-icons/Ionicons'
import CheckBox from './CheckBox'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { entityCompleted, entityIncomplete } from '../redux/entityData'



function EntityTile({id,title,date,description,onPress}){
    const completed=useSelector(state=>state.data.completed)
    const dispatch=useDispatch();
    const navigation=useNavigation()
    function onPressHandler(){
        navigation.navigate('Manage',{
            entityid:id
        })
    }
    
    const idChecked=completed.includes(id);
    function onCheckedHandler(){
        if(idChecked){
            dispatch(entityIncomplete({eid:id}))
        }
        else{
            console.log(id)
            dispatch(entityCompleted({eid:id}))
        }
        console.log(completed)
        // 
    }

    

    return (
        <View style={styles.container}>
        
        <Pressable style={styles.icon} onPress={onPress}> 
        <CheckBox IconName={idChecked?"checkbox-marked":"checkbox-blank-outline"}/>  
        </Pressable>
        <Pressable onPress={onPressHandler}>
            <View style={styles.header}>
                <Text>{title}</Text>
                <Text>{date}</Text>
            </View>
            <View style={styles.description}>
                <Text>{description}</Text>
            </View>
        </Pressable>
        
        </View>
    )

    }
    


export default EntityTile

const styles=StyleSheet.create({
    container:{
        borderRadius:12,
        backgroundColor:'#e7cdd2',
        margin:8,
        flex:1,
        flexDirection:'row',
        
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:6
    },
    description:{
        margin:8
    },
    icon:{
        padding:10,
        paddingVertical:15
        // verticalAlign:'middle'
    }
})