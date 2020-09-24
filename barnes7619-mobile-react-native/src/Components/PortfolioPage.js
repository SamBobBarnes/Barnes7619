import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-dom';
import '../CSS/Main.css';
import BodyText from './BodyText';
import Header from './Header';
import SideBar from './SideBar';

export class PortfolioPage extends Component {
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
		const bodyList = body.map((body) => (
			<Text key={body.id} style={this.styles.links}>
				{body.blink}
				<Link
					style={{ color: 'black' }}
					to={{ pathname: body.href }}
					target='_blank'
				>
					<u>{body.link}</u>
				</Link>
				{body.alink}
				<br />
				<br />
			</Text>
		));
		return (
			<React.Fragment>
				<Header touched={this.Touched}>{this.props.children}</Header>
				{this.state.sideBarVis && (
					<SideBar linkList={links} visible={this.state.sideBarVis} />
				)}
				<View style={{ marginTop: 90 }}>
					<View>
						<Text
							style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}
						>
							{heading}
						</Text>
						<BodyText page='SBP'>{bodyList}</BodyText>
					</View>
				</View>
			</React.Fragment>
		);
	}

	styles = StyleSheet.create({
		links: {
			color: 'black',
		},
	});
}

export default PortfolioPage;
