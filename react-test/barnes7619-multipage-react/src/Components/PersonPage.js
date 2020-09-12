import React, { Component } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import '../CSS/Fonts.css'
import '../CSS/Main.css'
import AgeCalc from './AgeCalc'
import BodyContents from './BodyContents'

class SamuelPage extends Component {
    render() {
        const {links,heading,info,bday,bmonth,byear,imgprops,body,bodyfont} = this.props.contents
        return (
            <React.Fragment>
                <Header>{this.props.children}</Header>
                <SideBar linkList={links} />
                <div className='bodywrap'>
                    <div className='bodydiv'>
                        <div id={imgprops}>
                            <p>Placeholder for Professional image</p>
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
        )
    }
}

export default SamuelPage
