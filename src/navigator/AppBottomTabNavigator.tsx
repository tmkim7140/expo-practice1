
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@/src/screens/home/HomeScreen2';
import DetailsScreen from '@/src/screens/home/DetailsScreen2';

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

export type HomeBottomTabProps = BottomTabScreenProps<RootStackParamList, RootScreens.Home>; // Navigator ID : 'MyStack' 는 선택사항
export type DetailsBottomTabProps = BottomTabScreenProps<RootStackParamList, RootScreens.Details>;

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function AppBottomTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={RootScreens.Home}>
                <Tab.Screen
                    name={RootScreens.Home}
                    component={HomeScreen}
                    options={{
                        title: '홈페이지',
                        headerShown: true,
                    }}
                    initialParams={{ prop1: "initialParams" }} // 초기 파라미터 지정
                />
                <Tab.Screen
                    name={RootScreens.Details}
                    component={DetailsScreen}
                    options={{
                        title: '디테일',
                        headerShown: true,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}