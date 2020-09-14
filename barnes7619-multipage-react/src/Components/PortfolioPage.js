import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import fontStyles from '../CSS/Fonts.module.css';
import styles from '../CSS/Main.module.css';
import { Link } from 'react-router-dom';
import cx from 'classnames';

class SamuelPortfolioPage extends Component {
	clickHandler = (href) => {
		global.window.location.replace(href);
	};

	render() {
		const { links, heading, body } = this.props.contents;
		const bodyList = body.map((body) => (
			<p key={body.id} className={fontStyles.consolas14}>
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
				<div className={styles.bodywrap}>
					<div className={styles.bodydiv}>
						<h2 className={cx(fontStyles.headingMed, fontStyles.centerText)}>
							{heading}
						</h2>
						<div className={styles.portfoliobody}>{bodyList}</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SamuelPortfolioPage;
