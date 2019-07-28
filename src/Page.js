import React from 'react'
import {Link} from 'react-router-dom'
import './Page.css'

export default function Page({ children }) {
    return (
        <div className="Page">
            <Link to='/' className="Page__Link">
                <div className="Page__navigate_index">
                    {'<'}
                </div>
            </Link>
            {children}
        </div>
    )
}