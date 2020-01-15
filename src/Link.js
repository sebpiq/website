import React from 'react'
import { Link } from 'react-router-dom'
import { isExternalUrl } from './utils'

export default function(props) {
    if (!props.href) {
        return props.children
    }
    if (isExternalUrl(props.href)) {
        return (
            <a 
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {props.children}
            </a>
        )
    } else {
        return <Link to={props.href}>{props.children}</Link>
    }
}