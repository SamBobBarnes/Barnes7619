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
            <Link to={this.state.href} style={{ textDecoration: 'none' }}>
                {this.props.current ? 
                <div className='sidebaritemH PatrickHand20'>
                    <b>{this.props.children}</b>
                </div> :
                <div className='sidebaritem PatrickHand20'>
                    <b>{this.props.children}</b>
                </div>}
            </Link>
        )
    }
}

export default Button
