import { StyleSheet} from 'react-native'
import color from '../contain/color';
const styles = StyleSheet.create({
    item:{
      marginBottom:10,
      paddingHorizontal:25,
      paddingVertical:12,
      flexDirection:'row',
      backgroundColor:color.white,
      justifyContent:'space-between',
      alignItems:'center'
    },
    square:{
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:8
    },
    odd:{
      backgroundColor:color.colorList
    },
    even:{
      backgroundColor:color.evenColor
    },
    number:{
      fontSize:15,
      color:color.white,
      fontWeight:'bold'
    },
    content:{
      width:'80%',
      fontSize:18
    }
})

export default styles;