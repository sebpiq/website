import React from 'react'
import Page from '../Page'
import PageTitle from '../PageTitle'
import VimeoVideo from '../VideoVimeo';
import YouTubeVideo from '../YouTubeVideo';
import CenteredImage from '../CenteredImage'

export default function() {
    return (
        <Page>
            <PageTitle text="Murmurate" />
            <VimeoVideo videoId="144312243" />
            <p><strong>Murmurate</strong> (previously called Fields) is a networked system exploring new areas of musical performance and audience participation through the use of mobile technology as a medium for sound diffusion. This project is realized in collaboration with artist <a href="http://tim-shaw.net">Tim Shaw</a>.</p>
            <CenteredImage src="/images/projects/fields-6.jpg" /> 
            <CenteredImage src="/images/projects/fields-1-smaller.png" /> 
            <p>
                Image © <a href="http://www.chrisdonia.co.uk/">http://www.chrisdonia.co.uk/</a>
            </p>
            <p>Murmurate has been performed around Europe and in the USA. Venues include Cafe OTO (UK), FACT Liverpool (UK), Piksel (NOR), Stereolux (FR) Islington Mill (UK), ZDB (PRT), NK Project (DEU), NIME (USA), Talbot Rice Gallery (UK) and Third Space (FIN).</p>
            <p>Murmurate has been kindly supported by New Media Scotland, Newcastle Institute for Creative Arts Practice, Culture Lab, Media Lab Helsinki, The Creative Exchange and Sound and Music.</p>

            <h2>Links</h2>
            <ul>
                <li><a href="http://github.com/sebpiq/fields">Source code of the Fields system, used in Murmurate</a></li>
                <li><a href="https://nime2015.lsu.edu/proceedings/196/index.html">Paper in proceedings of NIME 2015</a></li>
            </ul>

            <h2>Supports</h2>
            <p><a href="https://taike.fi">The Finnish Arts Council (Taike)</a> | <a href="https://www.aalto.fi/en/aalto-media-lab">Media Lab Helsinki</a> | <a href="http://www.soundandmusic.org/">Sound and Music (UK national agency for New Music)</a> | <a href="https://www.ncl.ac.uk/creativearts/">NICAP</a></p>

            <h2>More videos</h2>
            <VimeoVideo videoId="120524097" />
            <YouTubeVideo videoId="P1aj6vwFITI" />
        </Page>
    )
}
