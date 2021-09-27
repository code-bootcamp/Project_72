import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketListPage from '../../../../../pages/screens/market';
import MarketDetailPage from '../../../../../pages/screens/market/[marketId]';
import MarketWritePage from '../../../../../pages/screens/market/new';
import RoomScreen from '../../screens/chat/room/chatRoomScreen';
import DialogPage from '../../../commons/dialog/dialog';
import ChatListScreen from '../../screens/chat/list/chatListScreen';
import FinshScreen from '../../screens/chat/finish/finishScreen';
import {GlobalContext} from '../../../../../App';

const Stack = createNativeStackNavigator();
const MarketStackNavigationUI = () => {
  const {userInfo} = useContext(GlobalContext);
  return (
    <>
      <Stack.Navigator screenOptions={() => ({headerShown: false})}>
        <Stack.Screen
          name="List"
          component={MarketListPage}
          options={() => ({
            title: '중고장터',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#26EBA6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen name="Detail" component={MarketDetailPage} />
        <Stack.Screen name="Write" component={MarketWritePage} />
        <Stack.Screen
          name="Room"
          component={RoomScreen}
          options={({route, navigation}) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#26EBA6',
            },
            headerTintColor: '#fff',
            title:
              userInfo.name !== route.params.thread.sellerName
                ? route.params.thread.sellerName
                : route.params.thread.myName,
            headerRight: () => (
              <DialogPage navigation={navigation} route={route} />
            ),
          })}
        />
        <Stack.Screen name="Finish" component={FinshScreen} />
        <Stack.Screen
          name="ChatList"
          component={ChatListScreen}
          options={({navigation}) => ({
            title: '채팅리스트',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#26EBA6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </>
  );
};
export default MarketStackNavigationUI;
