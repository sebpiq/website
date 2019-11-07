import React from 'react'
import {Link} from 'react-router-dom'
import './PageTitle.css'

export default function(props) {

    return (
        <h1 className="PageTitle">
            <Link to='/' className="PageTitle__navigate_index">
                <span>{'<'}</span>
            </Link>
            <span className="PageTitle__text">{props.text}</span>
        </h1>
    )
}