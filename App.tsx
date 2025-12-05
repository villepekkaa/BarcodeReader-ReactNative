import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions()
  const [barcode, setBarcode] = useState<String | null>(null)
  const [scanned,setScanned] = useState<boolean>(false)

 

const handleBarcodeScanned = (result: BarcodeScanningResult): void => {
  if (!scanned && result?.data) {
    setScanned(true)
    setBarcode(result.data)
  }
}

  if (!permission) {
    // camera permissions loading
    return <View />
  }

  
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show to the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera}
      onBarcodeScanned={handleBarcodeScanned} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
});
