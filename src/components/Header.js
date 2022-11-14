import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
// import COLORS from '../constants/Colors';
// import IMAGES from '../constants/Images';
import  IMAGES from '../constant/images'
const {height, width} = Dimensions.get('window');
const Header = props => {


 



  return (
    <View style={styles.container}>
      <TouchableOpacity
        // style={{padding: 3}}
        onPress={() => props.navigation.goBack()}>
        <Image
          source={IMAGES.backIcon}

          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.headingText}>{props.headingText}</Text> 
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    height: RFValue(50),
    width,
    // backgroundColor: 'white',
    backgroundColor:'#00B5E2',
    flexDirection: 'row',
    paddingHorizontal: 20,
    // justifyContent: 'space-between',
    alignItems: 'center',
    // paddingTop: RFValue(25),
  },
  backIcon: {
    height: RFValue(18),
    width: RFValue(18),
    tintColor:'white'
  },
  headingText: {
    color: 'white',
    fontWeight: '500',
    fontSize: RFValue(14),
    marginLeft:RFValue(20)
  },
  locationIcon: {
    width: RFValue(15),
    height: RFValue(15),
    resizeMode: 'contain',
  },
});
