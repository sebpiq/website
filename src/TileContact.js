import React, { Fragment } from 'react'
import './Tile.css'


export default function(props) {
    return (
        <div className="Tile">
            <div className="Tile__header">
                <span>Contact</span>
            </div>
            <div className="Tile__body">
                <div>
                    <img src="/images/external-link.svg" /><a href="https://github.com/sebpiq">github</a>
                </div>
                <div>
                    <img src="/images/external-link.svg" /><a href="mailto://sebpiq@gmail.com">email</a>
                </div>
                <div>
                    <img src="/images/external-link.svg" /><a href="https://vimeo.com/sebpiq/">vimeo</a>
                </div>
            </div>
        </div>
    )
}