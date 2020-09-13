import React, { Component } from 'react'
import '../CSS/SideBar.css'
import { Link } from 'react-router-dom'
import SamPDF from '../Resumes/Resume-Samuel-Barnes.pdf'
import OndaPDF from '../Resumes/Resume-Aundrea-Barnes.pdf'

class Button extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             href: this.props.href
        }


    }

    render() {

        var PDF
        var name
        if (this.state.href == 'SamPDF') {
            PDF = SamPDF
            name = 'Resume-Samuel-Barnes.pdf'
        }
        else {
            PDF = OndaPDF
            name = 'Resume-Aundrea-Barnes.pdf'
        }
        return (
            <a href={PDF} download={name}>
                <div className='sidebaritem PatrickHand20'>
                    <b>{this.props.children}</b>
                </div>
            </a>
        )
    }
}

export default Button
