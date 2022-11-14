import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoImageStyle:{
    height:hp('20%'),
    width:wp('40%'),
    // alignItems:'center',
    // justifyContent:'center',
    // alignSelf:'center',
    // marginTop:RFValue(20),
    // marginLeft:'10%'
  },
  chooseBtn:{
    backgroundColor:'white',
    height:RFValue(40),
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    marginTop:RFValue(10)
  },
  browseFileText:{
    color:'black',
    fontSize:RFValue(13),
    fontWeight:'600'
  },
  btnContainer:{
    alignSelf:'center',
    position:'absolute',
    bottom:'3%',
    width:'90%',
    alignItems:'center',
    
  },
  listOfAvailableBtn:{
    // marginTop:RFValue(30),
    // backgroundColor:'red'

  },
  listOfAvailableText:{
    fontSize:RFValue(13),
    color:'white',
    fontWeight:'600'
  },
  textStyle: {
    // backgroundColor: '#fff',
    fontSize: RFValue(15),
    marginTop: RFValue(15),
    color: 'black',
    width:'70%',
    // alignSelf:'center',
    fontWeight:'600',
    textAlign:'center',
    // marginTop:RFValue(20)
    fontWeight:'bold',
  },
 
});
