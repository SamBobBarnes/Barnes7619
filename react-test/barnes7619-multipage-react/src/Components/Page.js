import React, { Component } from 'react'
import Header from './Header'
import SideBar from './SideBar'

class Page extends Component {
    render() {
        return (
            <div>
                <Header>{this.props.children}</Header>
                <SideBar linkList={this.props.linkList} />
            </div>
        )
    }
}

export default Page
