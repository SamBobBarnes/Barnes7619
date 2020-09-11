import React, { Component } from 'react'
import '../CSS/SideBar.css'
import '../CSS/Fonts.css'
import Button from './Button';

class SideBar extends Component {
    render() {
        const nodes = this.props.linkList.map((node) => <Button key={node.id} href={node.href}>{node.text}</Button>)
        return <div className='sidebar'>{nodes}</div>
    }
}

export default SideBar
