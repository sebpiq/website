import React from 'react'

export default function VimeoVideo({ videoId }) {
    const src = `//player.vimeo.com/video/${videoId}?byline=0&amp;portrait=0`
    return (
        <iframe 
            src={src} 
            width="100%" 
            height="50%" 
            frameBorder="0" 
            webkitallowfullscreen="true" 
            mozallowfullscreen="true" 
            allowFullScreen={true}>
        </iframe>
    )
}