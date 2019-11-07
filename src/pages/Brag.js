import React from 'react'
import Page from '../Page'
import PageTitle from '../PageTitle'
import './Brag.css'

const concerts = [
    {"date": "19/02/2017", "projectName": "Atmosphere | La Jetée", "projectUrl":"/la-jetee", "venue": "Glasgow Film Festival, Scotland"},
    {"date": "10->30/10/2016", "projectName": "ParaFonoM", "projectUrl": "http://binauralmedia.org/news/en/arquivo/8954", "venue": "Nodar residency (SoCCoS), Vouzela, Portugal"},
    {"date": "28/09/2016", "projectName": "Murmurate", "projectUrl": "/murmurate", "venue": "Sight and Sound festival, Montreal, Canada"},
    {"date": "19/08/2016", "projectName": "Atmosphere | La Jetée", "projectUrl":"/la-jetee", "venue": "Assembly Rooms, Edinburgh, Scotland"},
    {"date": "19->21/08/2016", "projectName": "Freedom Portal", "projectUrl":"/freedom-portal", "venue": "Electropixel, Nantes, France"},
    {"date": "01/07/2016", "projectName": "Murmurate", "projectUrl": "/murmurate", "venue": "The Wired Lab, Wagga-Wagga, Australia"},
    {"date": "14/05/2016", "projectName": "Murmurate", "projectUrl": "/murmurate", "venue": "Cumberland Arms, Newcastle, England"},
    {"date": "13/05/2016", "projectName": "Murmurate", "projectUrl": "/murmurate", "venue": "FACT, Liverpool, England"},
    {"date": "20/04/2016", "projectName": "Murmurate", "projectUrl": "/murmurate", "venue": "Stereolux, Nantes, France"},
    {"date": "13/04/2016", "projectName": "Fields Workshop", "projectUrl": "/murmurate", "venue": "Stereolux, Nantes, France"},
    {"date": "11/04/2016", "projectName": "Freedom Portal", "projectUrl": "/freedom-portal", "venue": "Stereolux residency, Nantes, France"},
    {"date": "19/11/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Piksel festival, Bergen, Norway"},
    {"date": "10/10/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Connect the Dots festival, Sheffield, England"},
    {"date": "26/09/2015", "projectName": "Murmurate", "projectUrl": "/murmurate", "venue": "Sanctuary, Galloway, Scotland"},
    {"date": "15/08/2015", "projectName": "New Weave", "projectUrl": "/newweave", "venue": "Flow festival, Helsinki, Finland"},
    {"date": "02/06/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "NIME, Baton Rouge, USA"},
    {"date": "20/05/2015", "projectName": "New Weave", "projectUrl": "/newweave", "venue": "Vapaan Taiteen Tila, Helsinki, Finland"},
    {"date": "23/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Durham Castle, Durham, England"},
    {"date": "22/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Islington Mill, Manchester, England"},
    {"date": "19/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Ulverston Parish Rooms, Ulverston, England"},
    {"date": "17/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "EAVI, Goldsmiths, London, England"},
    {"date": "16/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Music Hack Space, London, England"},
    {"date": "14/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "The Louisiana Cellar, Bristol, England"},
    {"date": "12/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Cafe OTO, London, England"},
    {"date": "11/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Other Worlds Festival, Blackpool, England"},
    {"date": "09/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Green Door Store, Brighton, England"},
    {"date": "09/04/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "University of Sussex, Brighton, England"},
    {"date": "27/01/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "WAC, Ircam, Paris, France"},
    {"date": "24/01/2015", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Gap in the Air, Edinburgh, Scotland"},
    {"date": "22/01/2015", "projectName": "New Weave", "projectUrl": "/newweave", "venue": "Third Space, Helsinki, Finland"},
    {"date": "23/11/2014", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "ICLI, Zé Dos Bois, Lisbo, Portugal"},
    {"date": "27/10/2014", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "NordiCHI, Helsinki, Finland"},
    {"date": "25/10/2014", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Third Space, Helsinki, Finland"},
    {"date": "10/10/2014", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "NK, Berlin, Germany"},
    {"date": "19/09/2014", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "ICMC, Athens, Greece"},
    {"date": "22/06/2014", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Mining Institute, Newcastle-upon-Tyne, England"},
    {"date": "08/04/2014", "projectName": "Fields", "projectUrl": "/murmurate", "venue": "Arkadia bookstore, Helsinki, Finland"}
]

export default function() {
    const concertsElems = concerts.map((concert) => (
        <li>
            <span className="Brag__date">{concert.date}</span>
            <a href={concert.projectUrl} target="_blank" rel="noopener noreferrer">
                <span className="Brag__name">{concert.projectName}</span>
            </a>
            <span className="Brag__venue">{concert.venue}</span>
        </li>
    ))
    return (
        <Page className="Brag">
            <PageTitle text="Present and past activities" />
            <ul>{concertsElems}</ul>
        </Page>
    )
}
