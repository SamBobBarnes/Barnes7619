import React, { Component } from 'react'
import '../CSS/SideBar.css'
import { Link } from 'react-router-dom'

class Button extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             href: this.props.href
        }


    }

    render() {
        return (
            <a href={this.state.href} style={{ textDecoration: 'none' }} download>
                <div className='sidebaritem PatrickHand20'>
                    <b>{this.props.children}</b>
                </div>
            </a>
        )
    }
}

export default Button
