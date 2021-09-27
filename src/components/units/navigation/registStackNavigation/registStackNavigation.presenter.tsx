import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Regist01Page from '../../../../../pages/screens/register/regist01';
import Regist02Page from '../../../../../pages/screens/register/regist02';
import Regist03Page from '../../../../../pages/screens/register/regist03';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const RegistStackNavigationUI = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="Regist01" component={Regist01Page} />
        <Stack.Screen name="Regist02" component={Regist02Page} />
        <Stack.Screen name="Regist03" component={Regist03Page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RegistStackNavigationUI;
