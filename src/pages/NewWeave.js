import React from 'react'
import Page from '../Page'
import VideoVimeo from '../VideoVimeo'

export default function() {
    return (
        <Page>
            <h1>New Weave</h1>
            <VideoVimeo videoId="120474851" />
            <p><strong>New Weave</strong> is an experimental sound performance where the performers improvise with small audio snippets recorded and sent live by audience members with their smartphones.</p>

            <h2>Supports</h2>
            <p><a href="https://taike.fi">The Finnish Arts Council (Taike)</a> | <a href="https://www.aalto.fi/en/aalto-media-lab">Media Lab Helsinki</a>.</p>

            <h2>Links</h2>
            <ul>
            <li><a href="http://github.com/sebpiq/rhizome">Source code of the rhizome system, used in the performance</a></li>
            </ul>
        </Page>
    )
}
