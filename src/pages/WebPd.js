import React from 'react'
import Page from '../Page'
import PageTitle from '../PageTitle'

export default function() {
    return (
        <Page>
            <PageTitle text="WebPd" />
            <p>
                WebPd is a compiler for the Pure Data audio programming language allowing to run .pd patches in web pages.
            </p>
            <p>
                WebPd is highly modular and takes a white-box approach to audio programming. 
                It converts the audio graph and processing objects from a patch into plain human-readable 
                JavaScript or AssemblyScript. The pure audio generated code can be then integrated directly 
                in any web application without using WebPd or Pure Data ever again 🌈.
            </p>

            <h2>Links</h2>
            <ul>
                <li><a href="http://github.com/sebpiq/WebPd">WebPd on github</a></li>
                <li><a href="https://sebpiq.github.io/WebPd_website/">WebPd online compiler + demo</a></li>
            </ul>
        </Page>
    )
}
