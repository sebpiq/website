import React from 'react'
import Page from '../Page'
import PageTitle from '../PageTitle'
import CenteredImage from '../CenteredImage'

export default function() {
    return (
        <Page>
            <PageTitle text="La Jetée (movie concert)" />
            <p>In the aftermath of World War III, survivors live underground in a post-apocalyptic Paris where scientists research time travel to rescue the present.</p>
            <p>With live narration by David McKechnie, Tim Shaw and Sébastien Piquemal re-score this acclaimed short film by Chris Marker in a performance that explores digital mobile technology and hyperlocal networks for surround sound diffusion.</p>
            <CenteredImage src="/images/projects/la-jetee-1.jpg" /> 
            <CenteredImage src="/images/projects/la-jetee-2.jpg" /> 
            <p>
                Image © <a href="http://www.chrisdonia.co.uk/">http://www.chrisdonia.co.uk/</a>
            </p>
            <p>This performance was produced by <a href="http://www.mediascot.org/">New Media Scotland</a>.</p>
            <h2>Links</h2>
            <ul>
                <li><a href="http://github.com/sebpiq/fields">Source code of the Fields system, used in the performance</a></li>
            </ul>
        </Page>
    )
}
