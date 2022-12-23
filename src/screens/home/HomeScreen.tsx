
import { Button, Text, View } from 'react-native';
import { HomeStackProps } from '@/src/navigator/AppStackNavigator'

export default function HomeScreen({ navigation, route }: HomeStackProps) {
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

      <Button title="push to Details" onPress={() => navigation.push('Details')} />

      {/* 이전화면으로 */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}