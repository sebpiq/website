import React from 'react'
import Page from '../Page'
import VideoVimeo from '../VideoVimeo'

export default function() {
    return (
        <Page>
            <VideoVimeo videoId="120474851" />
            <p><strong>New Weave</strong> is an experimental sound performance where the performers improvise with small audio snippets recorded and sent live by audience members with their smartphones.</p>
            <p>Snapping their fingers, speaking, whistling into their phones, the participants expose themselves. The performers on the other hand have to respond instantly to any incoming sound, and are thus in a permanent state of destabilization. Through this open outcome and this double vulnerability, a different type of relationship emerges, based on dialogue and exchange rather than blind hierarchy ; a fragile equilibrium, held together with glitchy rhythms and deep pulsating pads.</p>
            <p>New Weave has been kindly supported by The Finnish Arts Council (Taike) and Media Lab Helsinki.</p>
            <h1 id="links">Links</h1>
            <ul>
            <li><a href="http://github.com/sebpiq/rhizome">Source code of the rhizome system, used in the performance</a></li>
            </ul>
        </Page>
    )
}
