import { useState } from 'react';
import { Platform, View, Image, StyleSheet, Button, Text, ScrollView } from 'react-native';


// Considerando que o entregavel explicita que o conteudo vai ser estatico.
// A melhor utilização vai ser utilizar o componente <ScrollView/>, nenhuma otimização de performance é realmente necessária.
// A Lista contem poucos items.

type ApointementGroup = {
    name: string;
    apointements: Apointement[]
}

type Apointement = {
    name: string;
    hour: string;
}

export default function HomeScreen() {
    const [groups] = useState<ApointementGroup[]>([
        {
            name: '(EU)',
            apointements: [
                {
                    name: 'Reunião "Daily"',
                    hour: '09h30'
                },
                {
                    name: 'Reunião com cliente Carros & Carros',
                    hour: '14h00'
                },
                {
                    name: 'Prazo final Projeto X',
                    hour: '16h30'
                }
            ]
        },
        {
            name: 'Jurema (chefe)',
            apointements: [
                {
                    name: 'Reunião "Daily"',
                    hour: '09h30',
                },
                {
                    name: "Almoço com a diretoria",
                    hour: '12h00'
                },
                {
                    name: 'Saída viagem',
                    hour: '15h00'
                }
            ]
        },
        {
            name: 'Aderbal',
            apointements: [
                {
                    name: 'Reunião Daily',
                    hour: '09h30'
                },
                {
                    name: 'Visita técnica Uni-FACEF',
                    hour: '13h30'
                },
                {
                    name: 'Prazo final Projeto X',
                    hour: '16h30'
                }
            ]
        }
    ])
    return (
        <View style={styles.container}>
            <View style={styles.presentation}>
                <View style={styles.personInfo}>
                    <Text> Gabriel Davi Lopes Jacobini - 24734 </Text>
                    <Text> Engenharia de Software 2023 </Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.appointementsList} >
                {
                    groups.map(group => (
                        <View style={styles.apointmentGroup}>
                            <Text style={styles.apointmentGrouptitle}>
                                {group.name}
                            </Text>
                            <View style={styles.appointmentGroupWrapper}>
                                {

                                    group.apointements.map(apointment => (
                                        <View style={styles.apointmentItem}>
                                            <Text>{apointment.hour}</Text>
                                            <Text>{apointment.name}</Text>
                                        </View>
                                    ))
                                }
                            </View>
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
    appointementsList: { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, marginTop: 16 },
    apointmentGroup: { flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4 },
    apointmentItem: { flex: 1, flexDirection: 'row', justifyContent: 'flex-start', gap: 8 },
    apointmentGrouptitle: { fontWeight: 700, fontSize: 16, flex: 1, justifyContent: 'center'},
    appointmentGroupWrapper: { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', gap: 6}
});