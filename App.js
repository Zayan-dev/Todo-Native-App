import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListScreen from './screens/ListScreen';
import AccessCam from './screens/AccessCam';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ListScreen /> */}
      <AccessCam></AccessCam>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
