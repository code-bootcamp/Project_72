import React from 'react';
import {useState} from 'react';
import Regist01UI from './registPage01.presenter';
const Regist01 = (props: any) => {
  const [petName, setPetName] = useState('');

  return (
    <Regist01UI
      navigation={props.navigation}
      setPetName={setPetName}
      petName={petName}
    />
  );
};
export default Regist01;
