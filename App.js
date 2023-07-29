import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import HomeScreen from './screen/HomeScreen';

export default function App() {
  return (
   <SafeAreaView>
    <HomeScreen/>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50
  },
});
