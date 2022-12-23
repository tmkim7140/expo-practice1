import 'react-native-gesture-handler';

import AppStackNavigator from '@/src/navigator/AppStackNavigator'
import AppBottomTabNavigator from '@/src/navigator/AppBottomTabNavigator'
import AppTobTabNavigator from '@/src/navigator/AppTopTabNavigator'

export default function App() {
  return (
    // <AppStackNavigator />
    // <AppBottomTabNavigator />
    <AppTobTabNavigator />
  );
}
