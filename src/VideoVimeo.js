import React, {Fragment} from 'react'

export default function VimeoVideo({ videoId }) {
    // const src = `//player.vimeo.com/video/${videoId}?byline=0&amp;portrait=0`
    const src = `https://player.vimeo.com/video/${videoId}?portrait=0`
    return (
        <Fragment>
            <div style={{
                padding: '56.25% 0 0 0',
                position: 'relative',
            }}>
                <iframe 
                    src={src} 
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                    }}
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    allowFullScreen={true}
                ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </Fragment>
    )

    
//     <iframe 
//     src={src} 
//     width="100%" 
//     height="50%" 
//     frameBorder="0" 
//     webkitallowfullscreen="true" 
//     mozallowfullscreen="true" 
//     allowFullScreen={true}>
// </iframe>
}