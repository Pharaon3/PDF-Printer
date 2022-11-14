import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    subContainer:{
        width:'90%',
        alignSelf:'center',
       
    },
    chooseFileText:{
        color:'black',
        fontSize:RFValue(13),
        fontWeight:'600'
    },
    chooseBtn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        height:RFValue(40),
        borderRadius:20,
        marginTop:RFValue(20)
    },
    copiesInput:{
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:20,
        marginTop:RFValue(20)
    },
    textStyle: {
        // backgroundColor: '#fff',
        fontSize: RFValue(15),
        // marginTop: RFValue(15),
        color: 'black',
        width:'100%',
        // alignSelf:'center',
        fontWeight:'600',
        textAlign:'center',
        // marginTop:RFValue(20)
        fontWeight:'bold',


      },

});
