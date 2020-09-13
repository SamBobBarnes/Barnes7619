import React, { Component } from 'react';
import HeaderM from './HeaderM';
import SideBar from './SideBar';
import fontStyles from '../CSS/Fonts.module.css';
import styles from '../CSS/MainM.module.css';
import BarnesB from '../IMG/BarnesB.jpg';
import cx from 'classnames';

class HomePageM extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sidebar: this.props.sidebar,
		};
	}

	render() {
		const { links, heading, body } = this.props.contents;
		return (
			<React.Fragment>
				<HeaderM>{this.props.children}</HeaderM>
				{this.state.sidebar ? <SideBar linkList={links} /> : <React.Fragment />}
				<div className={styles.bodywrap}>
					<div className={styles.bodydiv}>
						<h2 className={cx(fontStyles.headingMed, fontStyles.centerText)}>
							{heading}
						</h2>
						<p className={fontStyles.ComicSans15}>{body}</p>
						<img
							className={styles.sbimg}
							src={BarnesB}
							alt='Barnes Engagement'
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default HomePageM;
