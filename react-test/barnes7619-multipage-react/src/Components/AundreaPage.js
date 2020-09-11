import React, { Component } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import '../CSS/Fonts.css'
import '../CSS/Main.css'
import BarnesB from '../IMG/BarnesB.jpg'
import AgeCalc from './AgeCalc'

class AundreaPage extends Component {
    render() {
        const {links,heading,body,info,bday,bmonth,byear} = this.props.contents
        return (
            <React.Fragment>
                <Header>{this.props.children}</Header>
                <SideBar linkList={links} />
                <div className='bodywrap'>
                    <div className='bodydiv'>
                        <div id='profimageab'>
                            <p>Placeholder for Professional image</p>
                        </div>
                        <div className='info'>
                            <h1 className='consolas centerText'>{heading}</h1>
                            <h3 className='consolas new-line'>{info}</h3>
                            <AgeCalc bday={bday} bmonth={bmonth} byear={byear} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AundreaPage
