import React from 'react'

function Body(props) {
    return (
        <div>
            <iframe src={props.photo}  width = '50%' height = '500'></iframe>  
            <p>{props.explanation}</p>
        </div>
    )
}

export default Body