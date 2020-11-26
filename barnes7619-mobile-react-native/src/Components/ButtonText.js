import React from 'react';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

function ButtonText(props) {
  let [fontsLoaded] = useFonts({
    PatrickHand_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Text style={styles.sideBarItemText}>
        <Text>{props.children}</Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  sideBarItemText: {
    textAlign: 'center',
    color: 'black',
    textDecorationLine: 'none',
    fontFamily: 'PatrickHand_400Regular',
    fontSize: 27,
    fontWeight: 'bold',
  },
});

export default ButtonText;
