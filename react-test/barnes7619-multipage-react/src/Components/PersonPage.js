import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import fontStyles from '../CSS/Fonts.module.css';
import styles from '../CSS/Main.module.css';
import AgeCalc from './AgeCalc';
import BodyContents from './BodyContents';
import SamPic from '../IMG/SamPic.png';
import OndaPic from '../IMG/OndaPic.png';
import cx from 'classnames';

class SamuelPage extends Component {
	render() {
		const {
			links,
			heading,
			info,
			bday,
			bmonth,
			byear,
			body,
			bodyfont,
			img,
		} = this.props.contents;
		var ProfPic;
		if (img === 'SB') ProfPic = SamPic;
		else if (img === 'AB') ProfPic = OndaPic;
		return (
			<React.Fragment>
				<Header>{this.props.children}</Header>
				<SideBar linkList={links} />
				<div className={styles.bodywrap}>
					<div className={styles.bodydiv}>
						<div className={styles.profimage}>
							<img src={ProfPic} className={styles.profpic} alt='Profile Pic' />
							{/* <p>Placeholder for Professional image</p> */}
						</div>
						<div className={styles.info}>
							<h1 className={cx(fontStyles.centerText, fontStyles.consolas)}>
								{heading}
							</h1>
							<h3 className={cx(fontStyles.consolas, styles.newLine)}>
								{info}
							</h3>
							<AgeCalc bday={bday} bmonth={bmonth} byear={byear} />
						</div>
						<div className={styles.contents}>
							<BodyContents font={bodyfont}>{body}</BodyContents>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SamuelPage;
