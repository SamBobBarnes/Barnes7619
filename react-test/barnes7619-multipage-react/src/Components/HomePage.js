import React, { Component } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import '../CSS/Fonts.css'
import '../CSS/Main.css'

class HomePage extends Component {
    render() {
        const {heading,body} = this.props.contents
        return (
            <div className='body'>
                {/* <Header>{this.props.children}</Header> */}
                {/* <SideBar linkList={this.props.linkList} /> */}
                {/* <h2 className='headingMed centerText'>{heading}</h2> */}
                <p className='comicSans15'>{body}</p>
            </div>
        )
    }
}

export default HomePage
