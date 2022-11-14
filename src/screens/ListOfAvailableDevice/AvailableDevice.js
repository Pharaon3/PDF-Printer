import {
  View,
  Text,
  Switch,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '../../components/Header';
import IMAGES from '../../constant/images';

const AvailableDevice = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const listAvailble = [
    {
      name: 'Canon',
      image: IMAGES.printerImage,
    },
    {
      name: 'Epson',
      image: IMAGES.printerImage,
    },
    {
      name: 'HP',
      image: IMAGES.printerImage,
    },
    {
      name: 'Kyocera',
      image: IMAGES.printerImage,
    },
    {
      name: 'Lexmark',
      image: IMAGES.printerImage,
    },
    {
      name: 'OKI',
      image: IMAGES.printerImage,
    },
    {
      name: 'Ricoh',
      image: IMAGES.printerImage,
    },
  ];
  const ListAvailbe = ({item}) => {
    return (
      <View style={styles.listAvaibleContainer}>
        <TouchableOpacity disabled={true} style={styles.nameContainer}>
          <Image style={styles.imageStyle} source={item.image} />
          <Text style={styles.printerName}>{item.name}</Text>
        </TouchableOpacity>
        {/* <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                /> */}
      </View>
    );
  };
  return (
    <ImageBackground style={styles.container} source={IMAGES.availableBg}>
      <SafeAreaView>
        <Header {...props} headingText={'List of Available Device'} />

        <View style={styles.subContainer}>
          <FlatList data={listAvailble} renderItem={ListAvailbe} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AvailableDevice;
