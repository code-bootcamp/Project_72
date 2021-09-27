import {useApolloClient, useMutation, useQuery} from '@apollo/client';
import React from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../App';
import MyPageUI from './myPage.presenter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import { FETCH_USER_LOGGED_IN } from './myPage.queries';

const MyPage = () => {
  const client = useApolloClient();
  const {setAccessToken, setUserInfo, userInfo} = useContext(GlobalContext);
  const {data} = useQuery(FETCH_USER_LOGGED_IN)
  console.log(userInfo)
  const onPressLogout = async () => {
    try {
      await client.clearStore();
      if (setAccessToken) setAccessToken('');
      if (setUserInfo) setUserInfo(undefined);
      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('userInfo');
      Alert.alert('로그아웃');
    } catch (error) {
      console.log(error.message);
    }
  };

  return <MyPageUI onPressLogout={onPressLogout} data={data}/>;
};
export default MyPage;
