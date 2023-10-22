import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import Button from "../UI/button"
import { useEffect, useState } from "react"
import { responsiveHeight,responsiveWidth,responsiveFontSize,responsiveScreenHeight } from "react-native-responsive-dimensions";




function Screen(){

    // const[values,setValues]=useState('');
    // const [currValue,setCurrentValue]=useState(0)
    // const [operator,setOperator]=useState(null)
    // const [prevValue,setPrevValue]=useState(0)
    // // const [currTotal,setTotal]=useState();
    // const[v,setV]=useState([]);
    

    // function numberInput(num){
        
    //         setValues(values+num)
    //         setCurrentValue(currValue+num);
    //         v.push(currValue);
      
    // }

    // function handleOperator(curroperator){
    //     //    (prev)=>setV(...prev,operator)
    //         setValues(values+curroperator)
    //         setPrevValue(currValue);
    //         setOperator(curroperator);
    //         setCurrentValue('');
            
    //     }
   

    

    

    


//     const[values,setValues]=useState([])

    
//     function numberInput(num){
//         // setCurrentValue(currValue+num)
//         const n=currValue*10+num;
//         setValues([...values,n])
        
// }
// function handleOperator(curroperator){
    //    (prev)=>setV(...prev,operator)
        // setValues(values+curroperator)
        // setPrevValue(currValue);
        // setOperator(curroperator);
        // setCurrentValue('');

//         setValues([...values,curroperator])
//         setCurrentValue(0);
        
//     }

// function operatorInput(){

    
//     setCurrentValue(0);
//     const total=values.reduce((prev,curr)=>{
//         if(curr!==NaN){
//             if(currValue!==0){
                // setPrevValue(currValue);
                // setCurrentValue(curr);

                // const num1=parseFloat(currValue);
                // const num2=parseFloat(prevValue);

                // if(operator==='+'){
                //     return prev=prev+curr
        
        
                // }
                // else if(operator==='-'){
                //     setCurrentValue((num2-num1).toString())
                // }
                // else if(operator==='*'){
                //     setCurrentValue((num2*num1).toString())
                // }
                // else if(operator==='/'){
                //     setCurrentValue((num2/num1).toString())
                // }

                // setOperator(null);
                // setPrevValue('');
    //         }
    //         else{
    //             setCurrentValue(curr);
    //         }
    //     }
    //     else{
    //         setOperator(curr);
    //     }
    // },0)

    // setCurrentValue(total)
    
    
    // values.map(value=>{
    //     if(value!==NaN){
            // if(currValue!==''){
            //     setPrevValue(currValue);
            //     setCurrentValue(value);

            //     const num1=parseFloat(currValue);
            //     const num2=parseFloat(prevValue);

            //     if(operator==='+'){
            //         setCurrentValue((num1+num2).toString())
        
        
            //     }
            //     else if(operator==='-'){
            //         setCurrentValue((num2-num1).toString())
            //     }
            //     else if(operator==='*'){
            //         setCurrentValue((num2*num1).toString())
            //     }
            //     else if(operator==='/'){
            //         setCurrentValue((num2/num1).toString())
            //     }

            //     setOperator(null);
            //     setPrevValue('');
            // }
            // else{
            //     setCurrentValue(value);
            // }
            // }else{
            //     setOperator(value);
            //  }
    // })

    
    // const num1=parseFloat(currValue);
    // const num2=parseFloat(prevValue);

    // if(operator==='+'){
    //     setCurrentValue((num1+num2).toString())
        
        
    // }
    // else if(operator==='-'){
    //     setCurrentValue((num2-num1).toString())
    // }
    // else if(operator==='*'){
    //     setCurrentValue((num2*num1).toString())
    // }
    // else if(operator==='/'){
    //     setCurrentValue((num2/num1).toString())
    // }
    
    // setOperator(null);
    // setPrevValue('');
    
    // console.log(v)
// }

    const[values,setValues]=useState('');
    const[currValue,setCurrentValue]=useState('');
    const [operator,setOperator]=useState(null)
    const [prevValue,setPrevValue]=useState('')
    // const[operatorClick,setOperatorClick]=useState(false)
    const[numClick,setNumClick]=useState(false);
    const[total,setTotal]=useState('');
    const[temp,setTemp]=useState('');

    function numberInput(num){

        setValues(values+num)
        

            
        
            if(prevValue!=='' && currValue===''){
                

                setTimeout(() => {
                    setCurrentValue(currValue + num);
                    setNumClick(true);
                    
                }, 0.001)               
                
    
            }

            if(prevValue!=='' && currValue!==''){
                setTimeout(()=>{
                    setCurrentValue(temp + num);
                    setNumClick(true);
                },0.001)
            }
            else{
                setCurrentValue(currValue+num)
                
                
            }   
    }


    useEffect(()=>{
        if(numClick===true){
            console.log('triggered')
            setTimeout(() => {
                if(operator!==null && currValue!=='' ){
                const t=operatorInput(prevValue,currValue)
                setTemp(currValue);
                setCurrentValue(t);
                setTotal(t);
                };
                setNumClick(false)
            }, 0.001);
        }
    },[numClick]);

    function allClear(){
        setCurrentValue('');
        setPrevValue('');
        setOperator(null)
        setTotal('');
        setValues('')
    }

    function handleOperator(operator){
        setValues(values+operator);
        setTimeout(()=>{
            setPrevValue(currValue);
            setCurrentValue('');
            setOperator(operator);
        },0.001);
    }

    function operatorInput(n1,n2){
        
        const num1=parseFloat(n1);
        const num2=parseFloat(n2);
        
        
        if(operator==='+'){
            const numt=((num1+num2).toString());
            return numt
            
            
        }
        else if(operator==='-'){
            console.log('occured')
            const numt=((num1-num2).toString());
            return numt
            
        }
        else if(operator==='*'){
            const numt=((num2*num1).toString());
            return numt
        }
        else if(operator==='/'){
            const numt=((num2/num1).toString());
            return numt
        }
        
        
    }

    function equal(){
        setTimeout(()=>{
            setValues(total);
            setTotal('');
        })
    }


    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.input}>
            <Text style={[styles.text,styles.values]}>{values}</Text>
            <Text style={[styles.text,styles.currValue]}>{total}</Text>
            </View>
            
            <View style={styles.padView}>
            <View style={styles.pad}>
                <Button onPress={()=>numberInput(7)}>7</Button>
                <Button onPress={()=>numberInput(8)}>8</Button>
                <Button onPress={()=>numberInput(9)}>9</Button>
                <Button onPress={allClear} text={styles.clear}>C</Button>
            </View>
            <View style={styles.pad}>
                <Button onPress={()=>numberInput(4)}>4</Button>
                <Button onPress={()=>numberInput(5)}>5</Button>
                <Button onPress={()=>numberInput(6)}>6</Button>
                <Button onPress={()=>handleOperator('+')} text={styles.operator}>+</Button>
            </View>
            <View style={styles.pad}>
                <Button onPress={()=>numberInput(1)}>1</Button>
                <Button onPress={()=>numberInput(2)}>2</Button>
                <Button onPress={()=>numberInput(3)}>3</Button>
                <Button onPress={()=>handleOperator('-')}text={styles.operator}>-</Button>
            </View>
            <View style={styles.pad}>
                <Button onPress={()=>numberInput('0')} >0</Button>
                <Button onPress={()=>handleOperator('/')} text={styles.operator}>/</Button>
                <Button onPress={()=>handleOperator('*')} text={styles.operator}>*</Button>
                <Button onPress={()=>equal()} style={styles.equal}>=</Button>
            </View>
            </View>
            </SafeAreaView>
        )
    } 

export default Screen

const styles=StyleSheet.create({
    pad:{
        flexDirection:'row',
        
        justifyContent:'space-evenly'
    },
    input:{
        margin:responsiveWidth(8),
        color:'white',
        borderBottomWidth:2,
        borderColor:'grey',
        alignItems:"flex-end",
        marginRight:responsiveWidth(6),
        justifyContent:'flex-end',
        
        flex:1,
        
        
        
    },
    values:{
       
        fontSize:responsiveFontSize(6),
        fontWeight:'700'
    },
    currValue:{
       
        fontSize:responsiveFontSize(3)
    },
    padView:{
        
        margin:responsiveWidth(2),
        
        // marginTop:responsiveHeight(1)
        // flex:responsiveHeight(2),
        
    },
    text:{
        color:'white',
        // marginVertical:10
        // textAlignVertical:'bottom',
        marginVertical:responsiveHeight(1),
        
        
    },
    container:{
       flex:1,
        backgroundColor:'#000000',
        
    },
    equal:{
        backgroundColor:'green',
    },
    clear:{
        color:'#e92323'
    },
    operator:{
        color:'green'
    }
})