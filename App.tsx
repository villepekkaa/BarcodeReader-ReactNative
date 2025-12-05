import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions()
  const [barcode, setBarcode] = useState<String | null>(null)
  const [scanned, setScanned] = useState<boolean>(false)



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

      {scanned && barcode && (
        <View style={styles.overlay}>
          <Text style={styles.barcodeText}>Barcode: {barcode}</Text>
          <TouchableOpacity style={styles.scanButton} onPress={() => setScanned(false)}>
            <Text style={styles.buttonText}>SCAN AGAIN</Text>
          </TouchableOpacity>
        </View>
      )}
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
  overlay: {
    position: 'absolute',
    bottom: 100,
    left: 50,
    right: 50,
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 4,

  },
  barcodeText: {
    textAlign: 'center',
    paddingBottom: 10,
    color: 'white'
  },
  scanButton: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 4,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
