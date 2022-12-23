
import { NavigationContainer } from '@react-navigation/native';
import { MaterialTopTabScreenProps, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '@/src/Screens/home/HomeScreen3';
import DetailsScreen from '@/src/Screens/home/DetailsScreen3';

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

export type HomeTopTabProps = MaterialTopTabScreenProps<RootStackParamList, RootScreens.Home>; // Navigator ID : 'MyStack' 는 선택사항
export type DetailsTopTabProps = MaterialTopTabScreenProps<RootStackParamList, RootScreens.Details>;

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default function AppTopTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={RootScreens.Home}>
                <Tab.Screen
                    name={RootScreens.Home}
                    component={HomeScreen}
                    options={{
                        title: '홈페이지',
                    }}
                    initialParams={{ prop1: "initialParams" }} // 초기 파라미터 지정
                />
                <Tab.Screen
                    name={RootScreens.Details}
                    component={DetailsScreen}
                    options={{
                        title: '디테일',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}