import React, {createContext, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatListScreen from '../../screens/chat/list/chatListScreen';
import AddRoomScreen from '../../screens/chat/addRoom/addRoonScreen';
import RoomScreen from '../../screens/chat/room/chatRoomScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import DialogPage from '../../../commons/dialog/dialog';
import FinshScreen from '../../screens/chat/finish/finishScreen';
import {GlobalContext} from '../../../../../App';

const ModalStack = createNativeStackNavigator();

export default function ChatStackNavigationPage() {
  const {userInfo} = useContext(GlobalContext);

  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#26EBA6',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
      }}>
      <ModalStack.Screen name="채팅리스트" component={ChatListScreen} />
      <ModalStack.Screen name="AddRoom" component={AddRoomScreen} />
      <ModalStack.Screen
        name="Room"
        component={RoomScreen}
        options={({route, navigation}) => ({
          title:
            userInfo.name !== route.params.thread.sellerName
              ? route.params.thread.sellerName
              : route.params.thread.myName,
          headerRight: () => (
            <DialogPage navigation={navigation} route={route} />
          ),
        })}
      />
      <ModalStack.Screen name="Finish" component={FinshScreen} />
    </ModalStack.Navigator>
  );
}
