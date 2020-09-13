import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import '../CSS/Fonts.css';
import '../CSS/Main.css';
import { Link } from 'react-router-dom';

class SamuelPortfolioPage extends Component {
	clickHandler = (href) => {
		global.window.location.replace(href);
	};

	render() {
		const { links, heading, body, font } = this.props.contents;
		const bodyList = body.map((body) => (
			<p key={body.id} className={font}>
				{body.blink}
				<Link to={{ pathname: body.href }} target='_blank'>
					<u>{body.link}</u>
				</Link>
				{body.alink}
			</p>
		));
		return (
			<React.Fragment>
				<Header>{this.props.children}</Header>
				<SideBar linkList={links} />
				<div className='bodywrap'>
					<div className='bodydiv'>
						<h2 className='headingMed centerText'>{heading}</h2>
						<div className='portfoliobody'>{bodyList}</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SamuelPortfolioPage;
