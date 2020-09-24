import React, { Component } from 'react';
import { Text, View } from 'react-native';
import '../CSS/Main.css';
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

	render() {
		const { links, heading, body } = this.props.contents;
		return (
			<React.Fragment>
				<Header touched={this.Touched}>{this.props.children}</Header>
				{this.state.sideBarVis && (
					<SideBar linkList={links} visible={this.state.sideBarVis} />
				)}
				<View>
					<View>
						<h2>{heading}</h2>
						<p>{body}</p>
					</View>
				</View>
			</React.Fragment>
		);
	}
}

export default PersonPage;
