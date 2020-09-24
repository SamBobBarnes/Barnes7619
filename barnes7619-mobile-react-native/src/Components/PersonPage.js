import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import '../CSS/Main.css';
import BodyText from './BodyText';
import Header from './Header';
import SideBar from './SideBar';

export class PersonPage extends Component {
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

	styles = StyleSheet.create({
		heading: {
			fontSize: 30,
			textAlign: 'center',
			fontWeight: 'bold',
		},
	});

	render() {
		const { links, heading, body } = this.props.contents;
		return (
			<React.Fragment>
				<Header touched={this.Touched}>{this.props.children}</Header>
				{this.state.sideBarVis && (
					<SideBar linkList={links} visible={this.state.sideBarVis} />
				)}
				<View style={{ marginTop: 90 }}>
					<View>
						<Text style={this.styles.heading}>{heading}</Text>
						<BodyText page='SB'>{body}</BodyText>
					</View>
				</View>
			</React.Fragment>
		);
	}
}

export default PersonPage;
