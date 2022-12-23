
import { Button, Text, View } from 'react-native';
import { HomeTopTabProps } from '@Navigation/AppTopTabNavigator'

export default function HomeScreen({ navigation, route }: HomeTopTabProps) {
    const prop1 = route.params?.prop1;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>{prop1}</Text>

            <Button
                title="navigate to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        prop1: "프롭1",
                        prop2: "프롭2",
                    });
                }}
            />

            {/* 이전화면으로 */}
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}