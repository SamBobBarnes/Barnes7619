import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import fontStyles from '../CSS/Fonts.module.css';
import styles from '../CSS/Main.module.css';
import AgeCalc from './AgeCalc';
import BodyContents from './BodyContents';
import SamPic from '../IMG/SamPic.png';
import OndaPic from '../IMG/OndaPic.png';

class SamuelPage extends Component {
	render() {
		const {
			links,
			heading,
			info,
			bday,
			bmonth,
			byear,
			imgprops,
			body,
			bodyfont,
			img,
		} = this.props.contents;
		var ProfPic;
		if (img == 'SB') ProfPic = SamPic;
		else if (img == 'AB') ProfPic = OndaPic;
		return (
			<React.Fragment>
				<Header>{this.props.children}</Header>
				<SideBar linkList={links} />
				<div className='bodywrap'>
					<div className='bodydiv'>
						<div id={imgprops}>
							<img src={ProfPic} className='profpic' />
							{/* <p>Placeholder for Professional image</p> */}
						</div>
						<div className='info'>
							<h1 className='consolas centerText'>{heading}</h1>
							<h3 className='consolas new-line'>{info}</h3>
							<AgeCalc bday={bday} bmonth={bmonth} byear={byear} />
						</div>
						<div className='contents'>
							<BodyContents font={bodyfont}>{body}</BodyContents>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SamuelPage;
