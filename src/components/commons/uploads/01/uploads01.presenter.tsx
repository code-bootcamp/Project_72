import React from 'react';
import {ViewImage, Wrapper} from './uploads01.style';
import Icon from 'react-native-vector-icons/Ionicons';

const Uploads01UI = (props) => {
  return (
    <>
      <Wrapper onPress={props.onPressOpenAlbum}>
        {props.imageUri.uri === '' ? (
          <Icon size={60} color={'#fff'} name="md-add-sharp" />
        ) : (
          <ViewImage imageStyle={{borderRadius: 10}} source={props.imageUri} />
        )}
      </Wrapper>
    </>
  );
};
export default Uploads01UI;
