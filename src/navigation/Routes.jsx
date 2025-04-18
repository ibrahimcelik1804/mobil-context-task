import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import SCREENS from '../utils/router';
import TaskScreen from '../screens/TaskScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

const Stack = createNativeStackNavigator();
const {TASK, USERDETAIL, USERLIST} = SCREENS;

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={USERLIST}>
      <Stack.Screen name={USERLIST} component={UserListScreen} />
      <Stack.Screen name={USERDETAIL} component={UserDetailScreen} />
      <Stack.Screen name={TASK} component={TaskScreen} />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
