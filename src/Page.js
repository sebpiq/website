import React from 'react'
import {Link} from 'react-router-dom'
import './Page.css'

export default function Page({ children }) {
    return (
        <div className="Page">
            <Link to='/' className="Page__navigate_index">
                <div>
                    {'<'}
                </div>
            </Link>
            {children}
        </div>
    )
}