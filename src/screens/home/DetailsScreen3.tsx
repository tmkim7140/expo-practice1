
import { Button, Text, View } from 'react-native';
import { DetailsTopTabProps } from '@Navigation/AppTopTabNavigator'

export default function DetailsScreen({ navigation, route }: DetailsTopTabProps) {
    const prop1 = route.params?.prop1;
    const prop2 = route.params?.prop2;

    console.log("navigation: ", navigation)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>{prop1}</Text>
            <Text>{prop2}</Text>

            <Button
                title="navigate to Home"
                onPress={() => navigation.navigate('Home', {
                    prop1: "from Detail"
                })}
            />

            {/* 탐색, 같은 경로는 탐색 안함 */}
            <Button
                title="Go to Details... again: Navigation"
                onPress={() => navigation.navigate('Details')}
            />

            {/* 이전화면으로 */}
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}