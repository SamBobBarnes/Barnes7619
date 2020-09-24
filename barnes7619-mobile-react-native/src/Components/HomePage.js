import React, { Component } from 'react';
import '../CSS/Main.css';
import Header from './Header';
import SideBar from './SideBar';
import { StyleSheet, Text, View } from 'react-native';

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
			wrapper: {},
			heading: {
				fontSize: 30,
				textAlign: 'center',
			},
		});

		return (
			<React.Fragment>
				<Header touched={this.Touched}>{this.props.children}</Header>
				{this.state.sideBarVis && (
					<SideBar linkList={links} visible={this.state.sideBarVis} />
				)}
				<View style={styles.wrapper}>
					<Text style={styles.heading}>{heading}</Text>
					<p>{body}</p>
				</View>
			</React.Fragment>
		);
	}
}

export default HomePage;
