import React from 'react';
import { View, StyleSheet } from 'react-native';

function HamburgerButton() {
  return (
    <View style={styles.hamburgerButton}>
      <View style={styles.hamburgerButtonL1}></View>
      <View style={styles.hamburgerButtonL2}></View>
      <View style={styles.hamburgerButtonL3}></View>
      <View style={styles.hamburgerButtonL4}></View>
      <View style={styles.hamburgerButtonL5}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  hamburgerButton: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'column',
  },
  hamburgerButtonL1: {
    flex: 2,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  hamburgerButtonL2: {
    flex: 1,
  },
  hamburgerButtonL3: {
    flex: 2,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  hamburgerButtonL4: {
    flex: 1,
  },
  hamburgerButtonL5: {
    flex: 2,
    backgroundColor: 'black',
    borderRadius: 5,
  },
});

export default HamburgerButton;
