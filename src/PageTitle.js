import React from 'react'
import './PageTitle.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function(props) {
    const location = useLocation()
    const pathnameBack = '/' + location.pathname
        .split('/')
        .filter(s => s.length)
        .slice(0, -1)
        .join('/')

    return (
        <h1 className="PageTitle">
            <Link to={pathnameBack} className="PageTitle__navigate_index">
                <span>{'<'}</span>
            </Link>
            <span className="PageTitle__text">{props.text}</span>
        </h1>
    )
}