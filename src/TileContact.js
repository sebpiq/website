import React from 'react'
import './Tile.css'
import './TileContact.css'

export default function(props) {
    return (
        <div className="Tile TileContact">
            <div className="Tile__header">
                <span>Contact</span>
            </div>
            <div className="Tile__body">
                <div className='TileContact__link'>
                    <img src="/images/external-link.svg" alt="external link" /><a href="https://github.com/sebpiq">github</a>
                </div>
                <div className='TileContact__link'>
                    <img src="/images/external-link.svg" alt="external link" /><a href="mailto://sebpiq@protonmail.com">email</a>
                </div>
                <div className='TileContact__link'>
                    <img src="/images/external-link.svg" alt="external link" /><a href="https://mastodon.social/@sebpiq">mastodon</a>
                </div>
            </div>
        </div>
    )
}