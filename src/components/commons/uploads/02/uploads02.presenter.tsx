import React from 'react';
import {ViewImage, Wrapper} from './uploads02.style';
import Icon from 'react-native-vector-icons/Ionicons';

const Uploads02UI = (props) => {
  return (
    <>
      <Wrapper onPress={props.onPressOpenAlbum}>
        {props.imageUri.uri === '' ? (
          <Icon size={60} color={'#aaa'} name="md-add-sharp" />
        ) : (
          <ViewImage imageStyle={{borderRadius: 10}} source={props.imageUri} />
        )}
      </Wrapper>
    </>
  );
};
export default Uploads02UI;
