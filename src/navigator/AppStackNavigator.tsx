
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreenProps } from '@react-navigation/stack';

import HomeScreen from '@/src/screens/home/HomeScreen';
import DetailsScreen from '@/src/screens/home/DetailsScreen';

export type RootStackParamList = {
  Home: {
    prop1: string
  }
  | undefined; //필요한 파라미터가 없는 상태
  Details: {
    prop1: string,
    prop2: string,
  }
  | undefined; //필요한 파라미터가 없는 상태;
};

export enum RootScreens {
  Home = 'Home',
  Details = 'Details',
}

export type HomeStackProps = StackScreenProps<RootStackParamList, RootScreens.Home, 'MyStack'>; // Navigator ID : 'MyStack' 는 선택사항
export type DetailsStackProps = StackScreenProps<RootStackParamList, RootScreens.Details>;

const Stack = createStackNavigator<RootStackParamList>();

export default function AppStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RootScreens.Home}>
        <Stack.Screen
          name={RootScreens.Home}
          component={HomeScreen}
          options={{
            title: '홈페이지222',
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#445511',
            },
            headerTintColor: 'white',
          }}
          initialParams={{ prop1: "initialParams" }} // 초기 파라미터 지정
        />
        <Stack.Screen
          name={RootScreens.Details}
          component={DetailsScreen}
          options={{
            title: '디테일',
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#445511',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}