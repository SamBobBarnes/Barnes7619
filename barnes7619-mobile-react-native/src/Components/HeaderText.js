import React from 'react';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { AppLoading } from 'expo';
import { View, StyleSheet, Text } from 'react-native';

function HeaderText(props) {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.headerTextContainer}>
        <Text numberOfLines={1} style={styles.headerText}>
          {props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  headerText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Pacifico_400Regular',
    marginRight: 45,
  },
});

export default HeaderText;
