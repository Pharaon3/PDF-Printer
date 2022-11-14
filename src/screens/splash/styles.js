import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: width / 2.3,
    width: width / 2.3,
    alignSelf: 'center',
    marginTop: height / 2,
  },
  pdfStyle: {
    color: 'white',
    fontSize: RFValue(17),
    alignSelf: 'center',
    fontWeight: '700',
    marginTop:RFValue(50)
  },
});
