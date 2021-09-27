import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BoardListPage from '../../../../../pages/screens/board';
import BoardWritePage from '../../../../../pages/screens/board/new';
import CommentsPage from '../../../../../pages/screens/comments';
import RoomScreen from '../../screens/chat/room/chatRoomScreen';
import ChatListScreen from '../../screens/chat/list/chatListScreen';
import FinshScreen from '../../screens/chat/finish/finishScreen';
import {GlobalContext} from '../../../../../App';
import DialogPage from '../../../commons/dialog/dialog';
const Stack = createNativeStackNavigator();
const BoardStackNavigationUI = () => {
  const {userInfo} = useContext(GlobalContext);

  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name="List" component={BoardListPage} />
      <Stack.Screen name="Comments" component={CommentsPage} />
      <Stack.Screen name="Write" component={BoardWritePage} />
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
          // headerRight: () => (
          //   <Icon
          //     name="chatbubbles-sharp"
          //     size={28}
          //     color="#ffffff"
          //     onPress={() => navigation.navigate('AddRoom')}
          //   />
          // ),
        })}
      />
    </Stack.Navigator>
  );
};
export default BoardStackNavigationUI;
