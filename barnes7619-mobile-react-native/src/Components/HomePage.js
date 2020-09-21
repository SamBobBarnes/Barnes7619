import React, { Component } from 'react';
import '../CSS/Main.css';
import Header from './Header';

export class HomePage extends Component {
	render() {
		const { links, heading, body } = this.props.contents;
		return (
			<React.Fragment>
				<Header>{this.props.children}</Header>
				{/* <SideBar linkList={links} /> */}
				<div>
					<div>
						{/* <img
							className={styles.sbimg}
							src={BarnesB}
							alt='Barnes Engagement'
						/> */}
						<h2>{heading}</h2>
						<p>{body}</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default HomePage;
