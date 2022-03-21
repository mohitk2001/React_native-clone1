import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import CarItem from './Screens/CarItem';
import CarList from './Screens/CarList';
export default function App() {
  return (
    <View style={styles.container}>
      <CarList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"100%",
    height:"100%"
  },
});
