import { View, StyleSheet, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
       <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.header}>Agenda do dia</Text>
          <View style={styles.column}> 
            <Text>Gabriel Davi Lopes Jacobini</Text>
            <Text>Engenharia de Software 2023</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Meus Compromissos" onPress={() => {
              router.navigate("/individual-apointaments");
            }} />
            <Button title="Compromissos da Equipe" onPress={() => {
              router.navigate("/team-apointaments");
            }} />
          </View>
        </View>
       </View>)
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', justifyContent: 'center'},
  descriptionContainer: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  buttonContainer: { flex: 1, flexDirection: 'column', gap: 12, justifyContent: 'center', width: '60%' },
  column: { flex: 1, flexDirection: 'column', alignItems: 'center' },
});