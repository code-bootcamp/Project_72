import * as React from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import MainBottomTabNavigationPage from './pages/navigation/MainBottomTabNavigation';
import {useState, createContext, useEffect} from 'react';
import StartPageStackNavigationPage from './pages/navigation/StartPageStackNavigation';
import {createUploadLink} from 'apollo-upload-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingPage from './pages/screens/landing';
import RegistStackNavigationPage from './pages/navigation/RegistStackNavigation';
import {assertSchema} from 'graphql';
import ImageTest from './src/components/commons/test';

export const GlobalContext = createContext({});
console.disableYellowBox = true;

interface IUserInfo {
  _id?: string;
  email?: string;
  name?: string;
  petGender?: string;
  petKinds?: string;
  petName?: string;
  picture?: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  useEffect(() => {
    const getToken = async () => {
      try {
        const getAccessToken = await AsyncStorage.getItem('accessToken');
        const getUserInfo = await AsyncStorage.getItem('userInfo');
        if (getAccessToken) {
          setAccessToken(String(getAccessToken));
        }
        if (getUserInfo) {
          const parsed = JSON.parse(getUserInfo) as IUserInfo;
          if (parsed) {
            setUserInfo(parsed);
          }
        }
      } catch (error) {
        console.log('EffectError', error);
      }
    };
    getToken();
  }, []);

  const uploadLink = createUploadLink({
    uri: 'http://34.68.72.16:4000/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`,
      // ${(typeof window !== 'undefined' && localStorage.getItem('accessToken'))||''}
    },
    credentials: 'include',
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };
  return (
    <>
      <GlobalContext.Provider value={value}>
        <ApolloProvider client={client}>
          {/* <ImageTest /> */}
          {
            isLoading && <LandingPage setIsLoading={setIsLoading} />
            //isLoading && fadeinview
          }
          {!isLoading &&
            (userInfo ? (
              <>
                {userInfo.petName !== null ? (
                  <MainBottomTabNavigationPage />
                ) : (
                  <RegistStackNavigationPage />
                )}
              </>
            ) : (
              <>
                <StartPageStackNavigationPage />
              </>
            ))}
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
