import React from 'react'
import Page from '../Page'
import PageTitle from '../PageTitle'
import VideoVimeo from '../VideoVimeo'
import CenteredImage from '../CenteredImage';

export default function() {
    return (
        <Page>
            <PageTitle text="Pure Data And Raspberry Pi Workshops" />
            <p>Teaching how to program and design a pocket-sized instrument with Pure Data and Raspberry Pi.</p>
            <CenteredImage src="/images/projects/pd-rpi-workshop-3.jpg" />
            <VideoVimeo videoId="98737686" />
            <VideoVimeo videoId="76642179" />
            <VideoVimeo videoId="76307579" />
            <p>
                Produced by <a href="https://www.cc4av.com/">CC4AV</a>
            </p>
        </Page>
    )
}
