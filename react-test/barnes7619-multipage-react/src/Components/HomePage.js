import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import '../CSS/Fonts.css';
import '../CSS/Main.css';
import BarnesB from '../IMG/BarnesB.jpg';

class HomePage extends Component {
	render() {
		const { links, heading, body } = this.props.contents;
		return (
			<React.Fragment>
				<Header>{this.props.children}</Header>
				<SideBar linkList={links} />
				<div className='bodywrap'>
					<div className='bodydiv'>
						<img className='sbimg' src={BarnesB} alt='Barnes Engagement' />
						<h2 className='headingMed centerText'>{heading}</h2>
						<p className='ComicSans15'>{body}</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default HomePage;
