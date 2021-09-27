import React, {useState} from 'react';
import Regist03UI from './registPage03.presenter';
import {gql, useMutation, useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../../App';
import {Alert} from 'react-native';

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      name
      picture
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      petName
      petGender
      petKinds
    }
  }
`;

const Regist03 = (props: any) => {
  const [image, setImage] = useState('');
  const {setUserInfo} = useContext(GlobalContext);
  const [updateUser] = useMutation(UPDATE_USER);
  const {data} = useQuery(FETCH_USER_LOGGED_IN);
  const onUpdatePetInfo = async () => {
    try {
      const updateResult = await updateUser({
        variables: {
          updateUserInput: {
            petName: props.petInfo.petName,
            petGender: props.petInfo.petGender,
            petKinds: props.petInfo.petKinds,
            picture: image,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      Alert.alert('등록되었습니다.');
      AsyncStorage.setItem('userInfo', JSON.stringify(data.fetchUserLoggedIn));
      setUserInfo(updateResult);
      console.log(data);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return <Regist03UI onUpdatePetInfo={onUpdatePetInfo} setImage={setImage} />;
};
export default Regist03;
