import { StyleSheet} from 'react-native'
import color from '../contain/color';
const styles = StyleSheet.create({
    item:{
      marginVertical:5,
      paddingHorizontal:20,
      paddingVertical:15,
      flexDirection:'row',
      backgroundColor:color.white,
      justifyContent:'space-between',
      alignItems:'center'
    },
    square:{
      backgroundColor:color.colorList,
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:8
    },
    number:{
      fontSize:15,
      color:color.white
    },
    content:{
      width:'80%',
      fontSize:18
    }
})

export default styles;