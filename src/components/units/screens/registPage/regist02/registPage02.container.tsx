import React, {useState} from 'react';
import Regist02UI from './registPage02.presenter';

const Regist02 = (props: any) => {
  const [petGender, setPetGender] = useState('');
  const [petKinds, setPetKinds] = useState('');

  const onPreessSelectMale = () => {
    setPetGender('male');
  };

  const onPreessSelectFemale = () => {
    setPetGender('female');
  };
  return (
    <Regist02UI
      petName={props.petName}
      navigation={props.navigation}
      petGender={petGender}
      setPetGender={setPetGender}
      petKinds={petKinds}
      setPetKinds={setPetKinds}
      onPreessSelectMale={onPreessSelectMale}
      onPreessSelectFemale={onPreessSelectFemale}
    />
  );
};
export default Regist02;
