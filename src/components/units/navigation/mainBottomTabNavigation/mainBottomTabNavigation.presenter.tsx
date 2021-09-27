import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MarketStackNavigationPage from '../../../../../pages/navigation/MarketStackNavigation';
import BoardStackNavigationPage from '../../../../../pages/navigation/BoardStackNavigation';
import MyPageStackNavigationPage from '../../../../../pages/navigation/MyPageStackNavigation';
import ChatStackNavigationPage from '../../../../../pages/navigation/ChatStackNavigation';

const Tab = createBottomTabNavigator();
const MainBottomTabNavigationUI = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName = '';

            if (route.name === '홈') {
              iconName = 'home';
            } else if (route.name === '더보기') {
              iconName = 'ellipsis-horizontal';
            } else if (route.name === '채팅') {
              iconName = 'chatbubbles-sharp';
            } else if (route.name === '중고장터') {
              iconName = 'cart';
            }
            return <Icon name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: '#26EBA6',
          tabBarInactiveTintColor: '#BDBDBD',
          headerShown: false,
          tabBarLabelStyle: {fontWeight: 'bold'},
        })}>
        <Tab.Screen name="홈" component={BoardStackNavigationPage} />
        <Tab.Screen name="채팅" component={ChatStackNavigationPage} />
        <Tab.Screen name="중고장터" component={MarketStackNavigationPage} />
        <Tab.Screen name="더보기" component={MyPageStackNavigationPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default MainBottomTabNavigationUI;
