import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home-screen';
import DailyScreen from './screens/daily-screen';
import WeekendScreen from './screens/weekend-screen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Compromissos do Dia" component={DailyScreen} />
        <Stack.Screen name="Compromissos da Semana" component={WeekendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};