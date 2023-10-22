import {Pressable, Text, View,StyleSheet,} from 'react-native'
import {responsiveWidth} from 'react-native-responsive-dimensions'
function Button({children,onPress,style,text}){
  return <Pressable style={[styles.button,style]}  onPress={onPress}>
 
<Text style={[styles.text,text]}>{children}</Text>

  </Pressable>
}

export default Button;

const styles=StyleSheet.create({
    button:{
      flexDirection:'row',
      margin:responsiveWidth(2),
      backgroundColor:'#151414',
      borderCurve:'continuous',
      width:responsiveWidth(22),
      height:responsiveWidth(22),
      borderRadius:responsiveWidth(11),
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
        color:'white',
        fontSize:responsiveWidth(8),
        fontWeight:'700',
        
        padding:20,
        
    }
  })