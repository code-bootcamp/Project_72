// import React, {useContext, useState, useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import ChatStackNavigationPage from '../units/navigation/chatStackNavigation/chatStackNavigation.container';
// import {AuthContext} from '../units/screens/chat/authProvider';
// import Loading from './loading/loading';

// export default function Routes() {
//   // const {user, setUser} = useContext(AuthContext);
//   const [loading, setLoading] = useState(true);
//   const [initializing, setInitializing] = useState(true);

//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//     setLoading(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <NavigationContainer>
//       <ChatStackNavigationPage />
//     </NavigationContainer>
//   );
// }

// 채팅할때 만든건데 나중에 문제 없으면 파일 삭제하겠습니다.
