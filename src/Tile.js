import React, { Fragment } from 'react'
import Link from './Link'
import { isExternalUrl } from './utils'
import './Tile.css'

function renderChildren({ url, header, date, activityType, preview }) {
    return (
        <Fragment>
            <div key="header" className="Tile__header">
                <span>{header}</span>
                {isExternalUrl(url) ? 
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
    return (
        <div className="Tile">
            <Link href={props.url}>
                {renderChildren(props)}
            </Link>
        </div>
    )
}