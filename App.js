import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Pages/Login/Login';
export default function App() {
  return (
    <View style={styles.mainParent} >
      <Login/>
      <StatusBar style='auto'/>
    </View>
  );
}
const styles = StyleSheet.create({
  mainParent : {
    height:"100%",
    width:"100%",
    flex:1,
    alignItems:'center',
    justifyContent:"center"
  }
})

