
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootScreens, RootStackParamList, DetailsStackProps } from '@/src/navigator/AppStackNavigator'

export default function DetailsScreen({ navigation, route }: DetailsStackProps) {
  const prop1 = route.params?.prop1;
  const prop2 = route.params?.prop2;

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
      <Button
        title="push to Home"
        onPress={() => navigation.push('Home')}
      />

      {/* 탐색, 같은 경로는 탐색 안함 */}
      <Button
        title="Go to Details... again: Navigation"
        onPress={() => navigation.navigate('Details')}
      />

      {/* Push, 같은 경로여도 이동 */}
      <Button
        title="Go to Details... again: Push"
        onPress={() => navigation.push('Details')}
      />

      {/* 이전화면으로 */}
      <Button title="Go back" onPress={() => navigation.goBack()} />

      {/* 처음화면으로 */}
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
}