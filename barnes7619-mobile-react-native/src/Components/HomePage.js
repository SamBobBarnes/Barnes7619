import React, { Component } from 'react';
import '../CSS/Main.css';
import Header from './Header';
import SideBar from './SideBar';
import { StyleSheet, Text, View } from 'react-native';
import BodyText from './BodyText';

export class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sideBarVis: false,
		};
	}

	Touched = () => {
		if (this.state.sideBarVis) {
			this.setState({
				sideBarVis: false,
			});
		} else {
			this.setState({
				sideBarVis: true,
			});
		}
	};

	render() {
		const { links, heading, body } = this.props.contents;

		const styles = StyleSheet.create({
			heading: {
				fontSize: 30,
				textAlign: 'center',
				fontWeight: 'bold',
			},
		});

		return (
			<React.Fragment>
				<Header touched={this.Touched}>{this.props.children}</Header>
				{this.state.sideBarVis && (
					<SideBar linkList={links} visible={this.state.sideBarVis} />
				)}
				<View style={{ marginTop: 90 }}>
					<Text style={styles.heading}>{heading}</Text>
					<BodyText page='home'>{body}</BodyText>
				</View>
			</React.Fragment>
		);
	}
}

export default HomePage;
