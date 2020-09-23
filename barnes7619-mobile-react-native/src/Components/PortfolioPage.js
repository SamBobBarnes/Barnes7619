import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-dom';
import '../CSS/Main.css';
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
				<Link to={{ pathname: body.href }} target='_blank'>
					<u>{body.link}</u>
				</Link>
				{body.alink}
			</Text>
		));
		return (
			<React.Fragment>
				<Header touched={this.Touched}>{this.props.children}</Header>
				{this.state.sideBarVis && (
					<SideBar linkList={links} visible={this.state.sideBarVis} />
				)}
				<div>
					<div>
						<h2>{heading}</h2>
						<div>{bodyList}</div>
					</div>
				</div>
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
