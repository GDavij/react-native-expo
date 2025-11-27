import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

// DECIDI USAR O EXPO INIT COM TYPESCRIPT POR SER MAIS ATUAL E RECOMENDADO NA DOCUMENTAÇÃO DO EXPO PARA BOOTSTRAP.
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)/index" options={{ title: 'Início', headerShown: true }} />
        <Stack.Screen name="(tabs)/individual-apointaments" options={{ title: 'Meus Compromissos', headerShown: true }} />
        <Stack.Screen name="(tabs)/team-apointaments" options={{ title: 'Compromissos da equipe', headerShown: true }} />

      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
