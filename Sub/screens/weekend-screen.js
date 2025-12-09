import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import compromissos from '../data/compSemana';
import { SectionList } from 'react-native-web';

function AttendIcon({ item }) {
  return <Text style={styles.atendsGap}>{item.descr}</Text>
}

function AttendHeader({ item }) {
  console.log({ item })
  return <Text style={styles.sectionHeader}>{item.title}</Text>
}

export default function DetailsScreen({ navigation }) {

  const formatedPayload = compromissos.map(item => ({
    title: item.titulo,
    data: item.dados
  }));

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer} >
        <Text>Gabriel Davi Lopes Jacobini</Text>
        <Text>Engenharia de Software</Text>
      </View>
      <View style={styles.attendsContainer}>
        <SectionList
          sections={formatedPayload}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.attendItem}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.attendGroup}>{title}</Text>
          )}
          contentContainerStyle={styles.atendsGap}
        >

        </SectionList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,  },
  dateContainer: { flex: 0, justifyContent: 'flex-start', alignItems: 'center', height: 200, marginTop: 12 },
  dateText: { fontSize: 24 },
  attendsContainer: { flex: 1, marginTop: 50, marginLeft: 16 },
  attendItem: { marginBottom: 10, marginTop: 10 },
  attendGroup: { fontSize: 20, fontWeight: 700, marginTop: 6, marginBottom: 6, textAlign: 'center' }
});