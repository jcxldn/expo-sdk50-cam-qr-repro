import { AutoFocus, Camera } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const handleScan = (data) => {
  console.log("QR CODE SCANNED")
  console.log(data)
}

export default function App() {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    requestPermission()
    return <Text>Permission not set</Text>
  }

  if (!permission?.granted) {
    return <Text>Permission not granted</Text>
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Camera autoFocus={AutoFocus.auto} style={StyleSheet.absoluteFillObject} onBarCodeScanned={handleScan} barCodeScannerSettings={{barCodeTypes: ["qr"]}}/>
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
