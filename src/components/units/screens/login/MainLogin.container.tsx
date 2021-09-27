import MainLoginUi from './MainLogin.presenter';

import React from 'react';
import {useForm} from 'react-hook-form';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../App';
import {useApolloClient, useMutation} from '@apollo/client';
import {FETCH_USER_LOGGED_IN, LOGIN_USER} from './MainLogin.queries';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainBottomTabNavigationPage from '../../../../../pages/navigation/MainBottomTabNavigation';

const MainLogin = (props: any) => {
  const {setUserInfo, userInfo, setAccessToken} = useContext(GlobalContext);
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER); // 일반 로그인

  const onAppLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {email: data.email, password: data.password},
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      await AsyncStorage.setItem(
        'accessToken',
        result.data.loginUser.accessToken || '',
      );
      AsyncStorage.setItem(
        'userInfo',
        JSON.stringify(resultUser.data.fetchUserLoggedIn) || '',
      );

      setAccessToken(result.data?.loginUser.accessToken);
      setUserInfo(resultUser.data.fetchUserLoggedIn);
      Alert.alert('로그인 완료');
    } catch (error) {
      console.log(error.message);
    }
  };

  const {handleSubmit, control} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  if (!userInfo) {
    return (
      <MainLoginUi
        navigation={props.navigation}
        onAppLogin={onAppLogin}
        control={control}
        handleSubmit={handleSubmit}
      />
    );
  }
  return <MainBottomTabNavigationPage />;
};
export default MainLogin;
