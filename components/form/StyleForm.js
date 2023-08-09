import { StyleSheet} from 'react-native'
import color from '../contain/color'
const styles = StyleSheet.create({
    Form:{
        width:'100%',
        paddingHorizontal:20,
        bottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    Input:{
      width:'80%',
      height:40,
      backgroundColor:color.white,
      paddingLeft:10,
      fontSize:15,
      borderWidth:2,
      borderColor:color.primary,
      borderRadius:10.
    },
    iconBorder:{
        width:40,
        height:40,
        backgroundColor:color.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
    },
    icon:{
        color:color.white,
        fontSize:30,
    }

})

export default styles;