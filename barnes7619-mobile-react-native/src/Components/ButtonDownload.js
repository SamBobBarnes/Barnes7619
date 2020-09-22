import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SamPDF from '../Resumes/Resume-Samuel-Barnes.pdf';
import OndaPDF from '../Resumes/Resume-Aundrea-Barnes.pdf';
import ButtonText from './ButtonText';

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
          <ButtonText>{this.props.children}</ButtonText>
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
  });
}

export default Button;
