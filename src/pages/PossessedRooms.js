import React from 'react'
import Page from '../Page'
import VideoVimeo from '../VideoVimeo'

export default function() {
    return (
        <Page>
            <p><strong>Possessed rooms</strong> is a series of parasitic performances happening in public computer rooms. The project is a collaboration with <a href="http://fernandovisockis.net/">Fernando Visockis</a>.</p>
            <VideoVimeo videoId="165747866" />
            <p><strong>possessed room #1</strong> Media Lab Helsinki, computer room 515.</p>
            <ul>
            <li>13 desktop computers, custom made software.</li>
            <li>Audio : samples extracted from thousands of random SoundCloud tracks.</li>
            <li>Visuals : Random images of country leaders downloaded from twitter.</li>
            <li>Live recording, 11/03/2016.</li>
            </ul>
            <h1 id="links">Links</h1>
            <ul>
            <li><a href="http://github.com/sebpiq/rhizome">Source code of the rhizome system, used in the performance</a></li>
            </ul>
        </Page>
    )
}
