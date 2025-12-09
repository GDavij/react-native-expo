import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Agenda do dia</Text>
      </View>
      <View>
        <Text>Gabriel Davi Lopes Jacobini</Text>
        <Text>Engenharia de Software</Text>
      </View>
      <View style={styles.callToActionContainers}>
        <Button
          title="Compromissos do Dia"
          onPress={() => navigation.navigate('Compromissos do Dia')}
        />
        <Button
          title="Compromissos da Semana"
          onPress={() => navigation.navigate('Compromissos da Semana')}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 24 },
  titulo: { fontSize: 24, fontWeight: 'bold' },
  callToActionContainers: { flex: 0, flexDirection: 'column', gap: 16 },
});