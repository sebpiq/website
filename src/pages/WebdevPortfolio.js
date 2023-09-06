import React from 'react'
import Page from '../Page'
import PageTitle from '../PageTitle'
import freelanceData from 'portfolio-and-cv/freelance.json'
import { projectNameToMediaFolder } from 'portfolio-and-cv/shared'
import './WebdevPortfolio.css'

export default function() {
    const videosElems = freelanceData
        .filter(datum => datum.video)
        .map(datum => (
            <div className='WebdevPortfolio__container' key={datum.name}>
                <h2>{datum.name}</h2>
                <div className='WebdevPortfolio__info'>
                    <div className='WebdevPortfolio__role'>
                        {datum.role}
                    </div>
                    <div>
                        {datum.technologies.map(tech => <span className='WebdevPortfolio__tech'>{tech}</span>)}
                    </div>
                    <div className='WebdevPortfolio__description'>
                        {datum.description}
                    </div>
                </div>
                <video 
                    src={`${projectNameToMediaFolder(datum.name)}/${datum.video}`}
                    autoPlay={true}
                    loop={true}
                ></video>
            </div>
        ))
    return (
        <Page className="WebdevPortfolio">
            <PageTitle text="Freelance web dev portfolio" />
            <div>
                {videosElems}
            </div>
        </Page>
    )
}
