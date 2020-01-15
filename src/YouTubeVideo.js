import React from 'react'

export default function YouTubeVideo({ videoId }) {
    const src = `//www.youtube.com/embed/${videoId}`
    return (
        <iframe 
            title={`youtube ${videoId}`}        
            width="100%" 
            height="50%" 
            src={src} 
            frameBorder="0" 
            allowFullScreen={true}>
        </iframe>
    )
}