import { useState } from 'react';
import { View, Image, StyleSheet, Button, Text, ScrollView } from 'react-native';


// Considerando que o entregavel explicita que o conteudo vai ser estatico.
// A melhor utilização vai ser utilizar o componente <ScrollView/>, nenhuma otimização de performance é realmente necessária.
// A Lista contem poucos items.

type Apointement = {
    name: string;
    hour: string;
}

export default function HomeScreen() {
    const [apointements] = useState<Apointement[]>([
    {
        hour: '09h30',
        name: 'Reunião "Daily'
    },
    {
        hour: '14h00',
        name: 'Reunião com cliente Carros & Carros'
    },
    {
        hour: '16h30',
        name: 'Prazo final Projeto X'
    }
    ])
  return (
       <View style={styles.container}>
        <View style={styles.presentation}>
            <Text style={styles.pageAction}>(EU)</Text>
            <View style={styles.personInfo}>
                <Text> Gabriel Davi Lopes Jacobini - 24734 </Text>
                <Text> Engenharia de Software 2023 </Text>
            </View>
        </View>
        <ScrollView contentContainerStyle={styles.appointementsList} >
            { apointements.map(apointment => (
            <View key={"APP_" + apointment.name} style={styles.apointmentItem}>
                <Text>{apointment.hour}</Text>
                <Text>{apointment.name}</Text>
            </View>
            ))
            }
            
        </ScrollView>
       </View>)
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', gap: 8},
    presentation: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', gap: 2, marginTop: 8 },
    pageAction: { fontSize: 20, fontWeight: '700' },
    personInfo: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', gap: 2 },
    appointementsList: { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', gap: 6},
    apointmentItem: { flex: 1, flexDirection: 'row', justifyContent: 'flex-start', gap: 8 },
});