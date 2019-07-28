import React from 'react'
import './CenteredImage.css'

export default function(props) {
    return (
        <div className="CenteredImage">
            <img 
                src={props.src} 
                key={props.src} 
                alt={props.alt || props.src}
                {...props}
            />
        </div>
    )
}