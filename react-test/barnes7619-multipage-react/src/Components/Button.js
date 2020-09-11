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
    
    clickHandler = () => {

    }

    render() {
        return (
            <Link to={this.state.href} style={{ textDecoration: 'none' }}>
                <div className='sidebaritem PatrickHand20'>
                    <b>{this.props.children}</b>
                </div>
            </Link>
        )
    }
}

export default Button
