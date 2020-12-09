import React from 'react'

function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
        </div>
    )
}

export default Header
