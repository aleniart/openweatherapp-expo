import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const openWeatherKey = 'xxx'
let url = 'https://api.openweathermap.org/data/2.5/weather?lat=54.44&lon=18.57&appid=openWeatherKey'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>hehe</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
