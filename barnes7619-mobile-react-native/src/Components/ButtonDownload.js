import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-dom';

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: this.props.href,
    };
  }

  render() {
    var PDF;
    var name;
    if (this.state.href === 'SamPDF') {
      PDF = SamPDF;
      name = 'Resume-Samuel-Barnes.pdf';
    } else {
      PDF = OndaPDF;
      name = 'Resume-Aundrea-Barnes.pdf';
    }
    return (
      <a href={PDF} download={name} style={{ textDecoration: 'none' }}>
        <View style={this.styles.sideBarItemN}>
          <Text styles={this.styles.sideBarItemText}>
            <b>{this.props.children}</b>
          </Text>
        </View>
      </a>
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
    sideBarItemText: {
      textAlign: 'center',
      lineHeight: 27,
      color: 'black',
      textDecorationLine: 'none',
    },
  });
}

export default Button;
