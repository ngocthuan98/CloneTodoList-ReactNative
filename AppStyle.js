import { StyleSheet} from 'react-native'
import color from './components/contain/color';
const styles = StyleSheet.create({
    Container:{
      flex:1,
    },
    Body:{
      flex:1,
      justifyContent:'space-between'
    },
    Text:{
      marginHorizontal:20,
      marginVertical:10,
      fontSize:30,
      textAlign:'center',
      fontWeight:'bold',
      color:color.title,
      marginTop:50,
    },
    image:{
      width:'100%',
      height:'100%'
    },
  })

export default styles;