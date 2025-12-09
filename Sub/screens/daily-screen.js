import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import compromissos from '../data/compDia';

function AttendIcon({ item }) {
  return <View style={styles.atendsGap}>{item.descr}</View>
}

export default function DetailsScreen({ navigation }) {

  const { height } = Dimensions.get('window')
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer} >
        <Text style={styles.dateText}> 11/11 (ter)</Text>
        <Text>Gabriel Davi Lopes Jacobini</Text>
        <Text>Engenharia de Software</Text>
      </View>
      <View style={styles.attendsContainer}>
        <FlatList
          data={compromissos}
          keyExtractor={item => item.id}
          renderItem={AttendIcon}
          initialNumToRender={50}
          windowSize={100}
          >

        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  dateContainer: { flex: 0, justifyContent: 'flex-start', alignItems: 'center', maxHeight: 200, marginTop: 12 },
  dateText: { fontSize: 24 },
  attendsContainer: {flex: 1, padding: 16, marginTop: 100},
  atendsGap: { marginBottom: 12 }
});