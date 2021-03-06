import React from 'react'
import Page from '../Page'
import PageTitle from '../PageTitle'

export default function() {
    return (
        <Page>
            <PageTitle text="WebPd" />
            <p>WebPd is a 100% JavaScript Pure Data runtime using Web Audio API to play audio in the browser. It aims at allowing a subset of Pure Data programming language to run in the browser without plugins and with best possible performance.</p>
            
            <h2>Links</h2>
            <ul>
                <li><a href="http://github.com/sebpiq/WebPd">WebPd on github</a></li>
            </ul>
        </Page>
    )
}
