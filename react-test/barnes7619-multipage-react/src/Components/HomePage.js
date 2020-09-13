import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import fontStyles from '../CSS/Fonts.module.css';
import styles from '../CSS/Main.module.css';
import BarnesB from '../IMG/BarnesB.jpg';

class HomePage extends Component {
	render() {
		const { links, heading, body } = this.props.contents;
		return (
			<React.Fragment>
				<Header>{this.props.children}</Header>
				<SideBar linkList={links} />
				<div className={styles.bodywrap}>
					<div className={styles.bodydiv}>
						<img
							className={styles.sbimg}
							src={BarnesB}
							alt='Barnes Engagement'
						/>
						<h2 className={(styles.headingMed, fontStyles.centerText)}>
							{heading}
						</h2>
						<p className={fontStyles.ComicSans15}>{body}</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default HomePage;
