import React from 'react'

function BodyContents(props) {
    return (
        <p className='new-line'>
            {props.children}
        </p>
    )
}

export default BodyContents
