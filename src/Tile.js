import React from 'react'
import { Link } from 'react-router-dom'
import './Tile.css'

function renderChildren({ header, date, activityType }) {
    return [
        <div key="header" className="Tile__header">{header}</div>,
        <div key="activityType" className="Tile__activityType">{activityType}</div>,
        <div key="date" className="Tile__date">{date}</div>,
    ]
}

export default function(props) {
    const isExternalUrl = props.url.startsWith('https://') || props.url.startsWith('http://')
    return (
        <div className="Tile">
            {isExternalUrl ? 
                <a href={props.url} target="_blank">{renderChildren(props)}</a> :
                <Link to={props.url}>{renderChildren(props)}</Link>}
        </div>
    )
}