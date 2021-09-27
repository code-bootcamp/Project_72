import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {Container, Wrapper} from './landingPage.style';
import { ILandingPage } from './landingPage.types';

const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      props.setIsLoading(false);
    });
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};
export default (props:ILandingPage) => {
  return (
    <Container>
      <FadeInView setIsLoading={props.setIsLoading}>
        <Wrapper source={require('../../../../imgs/landing.png')} />
      </FadeInView>
    </Container>
  );
};
