import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import '../CSS/Main.css';
import HamburgerButton from './HamburgerButton';
import HeaderText from './HeaderText';

function Header(props) {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={() => console.log('Touched!')}>
        <HamburgerButton />
      </TouchableWithoutFeedback>
      <HeaderText>{props.children}</HeaderText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff6600',
    width: '100%',
    height: 80,
    flexDirection: 'row',
  },
});

export default Header;
