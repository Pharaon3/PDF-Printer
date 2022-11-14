import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#00B5E2'
  },

  subContainer:{
    width:'90%',
    alignSelf:'center'
  },
  listAvaibleContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:RFValue(20)
  },
  nameContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  imageStyle:{
    tintColor:'black'
  },
  printerName:{
   color:'black',
   fontSize:RFValue(13),
   fontWeight:'600',
   paddingLeft:RFValue(20) 
  }
});
