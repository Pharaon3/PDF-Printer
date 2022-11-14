import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import IMAGES from '../../constant/images';
import styles from './styles';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
// import Pdf from 'react-native-pdf';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';
import {BluetoothState} from 'react-native-bluetooth-state-manager';
export default function Home(props) {
  const [result, setResult] = useState([
    DocumentPickerResponse | DirectoryPickerResponse | undefined | null,
  ]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const handleError = err => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  const handPicker = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
        type: [DocumentPicker.types.pdf],
      });
      console.log('res : ' + JSON.stringify(pickerResult));
      console.log('URI : ' + pickerResult.uri);
      console.log('Type : ' + pickerResult.type);
      console.log('File Name : ' + pickerResult.name);
      console.log('File Size : ' + pickerResult.size);
      setResult([pickerResult]);

      console.log('selected file is  ', pickerResult);
      if ([pickerResult]) {
        props.navigation.navigate('PrintFile', {file: pickerResult});
      } else {
        alert('pleae select file');
      }
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <ImageBackground style={styles.container} source={IMAGES.backgroumd1}>
      <View style={styles.btnContainer}>
        <Text style={styles.textStyle}>
          File Name: {result[0].name ? result[0].name : ''}
        </Text>
        <Image
          style={styles.logoImageStyle}
          source={IMAGES.logo}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={handPicker} style={styles.chooseBtn}>
          <Text style={styles.browseFileText}>BROWSE File</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AvailableDevice')}
          // onPress={handleBluetoothe}
          style={styles.chooseBtn}>
          <Text style={styles.browseFileText}>List Of Devices</Text>
        </TouchableOpacity>
        <BluetoothState>
          <BluetoothState.PoweredOn></BluetoothState.PoweredOn>
          <BluetoothState.PoweredOff>
            {({requestToEnable, openSettings}) => (
              <View style={{width: '100%', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={
                    Platform.OS === 'android' ? requestToEnable : openSettings
                  }
                  // onPress={() => props.navigation.navigate('AvailableDevice')}
                  // onPress={handleBluetoothe}
                  style={styles.chooseBtn}>
                  <Text style={styles.browseFileText}>
                    Please Connect with Bluetooth
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </BluetoothState.PoweredOff>
          <BluetoothState.Resetting>
            <ActivityIndicator />
          </BluetoothState.Resetting>
          <BluetoothState.Unauthorized>
            {/* <Text>This will rendered only when bluetooth permission is not granted.</Text> */}
          </BluetoothState.Unauthorized>
          <BluetoothState.Unsupported>
            {/* <Text>This will rendered only when bluetooth is not supported.</Text> */}
          </BluetoothState.Unsupported>
          <BluetoothState.Unknown>
            {/* <Text>You have a really strange phone.</Text> */}
          </BluetoothState.Unknown>
        </BluetoothState>
      </View>
    </ImageBackground>
  );
}
