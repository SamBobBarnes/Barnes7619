import React, { Component } from 'react';
import '../CSS/Main.css';
import Header from './Header';
import SideBar from './SideBar';

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBarVis: true,
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
        <div>
          <div>
            <h2>{heading}</h2>
            <p>{body}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
