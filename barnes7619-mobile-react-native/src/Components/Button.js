import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-dom';
import ButtonText from './ButtonText';

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: this.props.href,
    };
  }

  render() {
    return (
      <Link to={this.state.href} style={{ textDecoration: 'none' }}>
        {this.props.current ? (
          <View style={this.styles.sideBarItemH}>
            <ButtonText>{this.props.children}</ButtonText>
          </View>
        ) : (
          <View style={this.styles.sideBarItemN}>
            <ButtonText>{this.props.children}</ButtonText>
          </View>
        )}
      </Link>
    );
  }

  styles = StyleSheet.create({
    sideBarItemN: {
      width: 300,
      height: 40,
      boxSizing: 'content-box',
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: '#ff0000',
      borderRadius: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    sideBarItemH: {
      width: 300,
      height: 40,
      boxSizing: 'content-box',
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: '#18c47f',
      borderRadius: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });
}

export default Button;
