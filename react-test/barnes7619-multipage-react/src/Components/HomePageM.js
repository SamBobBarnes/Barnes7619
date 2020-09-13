import React, { Component } from 'react';
import HeaderM from './HeaderM';
import SideBar from './SideBar';
import fontStyles from '../CSS/Fonts.module.css';
import styles from '../CSS/MainM.module.css';
import BarnesB from '../IMG/BarnesB.jpg';

class HomePage extends Component {
	render() {
		const { links, heading, body } = this.props.contents;
		return (
			<React.Fragment>
				<HeaderM>{this.props.children}</HeaderM>
				{/* <SideBar linkList={links} /> */}
				<div className='bodywrap'>
					<div className='bodydiv'>
						{/* <img className='sbimg' src={BarnesB} alt='Barnes Engagement' /> */}
						<h2 className='headingMed centerText'>{heading}</h2>
						<p className='ComicSans15'>{body}</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default HomePage;
