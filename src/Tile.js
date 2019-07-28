import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Tile.css'

function renderChildren(isExternalUrl, { header, date, activityType, preview }) {
    return (
        <Fragment>
            <div key="header" className="Tile__header">
                <span>{header}</span>
                {isExternalUrl ? 
                    <img className="Tile__external-link" src="/images/external-link.svg" alt="home" />
                    : null
                }
            </div>
            <div key="preview" className="Tile__body">{preview}</div>
            <div key="footer" className="Tile__footer">
                <div key="date" className="Tile__date">{date}</div> | <div key="activityType" className="Tile__activityType">{activityType}</div>
            </div>
        </Fragment>
    )
}

export default function(props) {
    const isExternalUrl = props.url.startsWith('https://') || props.url.startsWith('http://')
    return (
        <div className="Tile">
            {isExternalUrl ? 
                <a href={props.url} target="_blank" rel="noopener noreferrer">{renderChildren(isExternalUrl, props)}</a>
                : <Link to={props.url}>{renderChildren(isExternalUrl, props)}</Link>}
        </div>
    )
}