import React from 'react'
import sortBy from 'lodash.sortby'
import rawProjects from 'portfolio-and-cv/projects.json'
import rawTeachings from 'portfolio-and-cv/teaching.json'
import rawWork from 'portfolio-and-cv/work.json'
import Page from '../Page'
import Link from '../Link'
import PageTitle from '../PageTitle'
import './Brag.css'
import { dateToTimestamp } from '../utils'

let projectsEvents = []
rawProjects.forEach((project) => {
    project.events.forEach((event) => {
        projectsEvents.push({
            projectName: project.name,
            projectUrl: project.url,
            type: event.type,
            date: event.date,
            timestamp: dateToTimestamp(event.date),
            venue: event.venue
        })
    })
})
projectsEvents = sortBy(projectsEvents, (event) => -event.timestamp)

rawProjects.forEach((project) => {
    const projectTeachings = project.events.filter((event) => ['workshop'].includes(event.type))
    if (projectTeachings.length) {
        rawTeachings.push({
            ...project,
            name: `${project.name} Workshop`,
            events: projectTeachings
        })
    }
})
const teachings = rawTeachings.map((teaching, i) => ({
    ...teaching,
    events: sortBy(
        teaching.events.map(event => ({ 
            ...event, 
            timestamp: dateToTimestamp(event.date) 
        })),
        event => -event.timestamp
    )
}))

const work = sortBy(rawWork, work => -work.start)

export default function() {
    const concertsElems = projectsEvents.map((event, i) => (
        <li key={i}>
            <span className="Brag__date">{event.date}</span>
            <Link href={event.projectUrl}>
                <span className="Brag__name">{event.projectName}</span>
            </Link>
            <span className="Brag__venue">{`${event.type === 'residency' ? 'residency, ': ''}${event.venue}`}</span>
        </li>
    ))

    const teachingElems = teachings.map((teaching, i) => {
        const eventsElems = teaching.events.map((event, j) => (
            <li key={j}>
                <span className="Brag__date">{event.date}</span>
                <span className="Brag__venue">{event.venue}</span>
            </li>
        ))
        return (
            <li key={teaching.name}>
                <Link href={teaching.url}>
                    <span className="Brag__name">{teaching.name}</span>
                </Link>
                <ul className="Brag__sublist">{eventsElems}</ul>
            </li>
        )
    })

    const workElems = work.map((work, i) => {
        const descriptionElems = work.description.map((description, j) => (
            <li key={j}>
                {description}
            </li>
        ))
        return (
            <li key={work.company}>
                <span className="Brag__date">{work.start} - {work.end} :</span>
                <span className="Brag__name">{work.company} - {work.title}</span>
                <ul className="Brag__sublist">{descriptionElems}</ul>
            </li>
        )
    })

    return (
        <Page className="Brag">
            <PageTitle text="Present and past activities" />

            <h2>Work experience</h2>
            <ul>{workElems}</ul>
            
            <h2>Teaching</h2>
            <ul>{teachingElems}</ul>

            <h2>Concerts, Exhibitions, Residencies</h2>
            <ul>{concertsElems}</ul>
        </Page>
    )
}
