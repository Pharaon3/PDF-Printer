import React, {Component, useState, useEffect} from 'react';
import {
  Animated,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
} from 'react-native';
import styles from './styles';
import IMAGES from '../../constant/images';


const SplashScreen = props => {
  let [splashBackAnim, setSplashBackAnim] = useState(new Animated.Value(0));
  let [splashOverlayAnim, setSplashOverlayAnim] = useState(
    new Animated.Value(0),
  );

  // const isAuth = useSelector(state => state?.AuthData?.isAuth);

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(splashBackAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(splashOverlayAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]).start(async () => {
      props.navigation.navigate('Home')
      });
    }, 3000);
  }, []);

  // reset = async () => {
  //   props.navigation.dispatch(
  //     CommonActions.reset({
  //       index: 0,
  //       routes: [{name: LOGIN}],
  //     }),
  //   );
  // };
  return (
    <>
      <StatusBar backgroundColor={'#00B5E2'} barStyle={'light-content'} />
      <ImageBackground 
      source={IMAGES.backgroumd1}
       style={styles.container}>
        <Animated.Image
          source={IMAGES.logo}
          style={[styles.logo, {opacity: splashBackAnim}]}
          resizeMode={'contain'}
        />
        {/* <Animated.Text
          style={[
            styles.pdfStyle,
            {
              opacity: splashOverlayAnim,
            },
          ]}>
         PDF PRINTERS
        </Animated.Text> */}
      </ImageBackground>
    </>
  );
};
export default SplashScreen;
