import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactResizeDetector from 'react-resize-detector'
import './App.css'
import BackgroundCanvas from './BackgroundCanvas'
import TileContainer from './TileContainer'
import Tile from './Tile'
import TileContact from './TileContact'
import FreedomPortal from './pages/FreedomPortal'
import LaJetee from './pages/LaJetee'
import Murmurate from './pages/Murmurate'
import NewWeave from './pages/NewWeave'
import PureDataRpiWorkshops from './pages/PureDataRpiWorkshops'
import WebPd from './pages/WebPd'
import PossessedRooms from './pages/PossessedRooms'
// !!! Must be imported last to override other css properties properly
import './responsive.css'

function App() {
    return (
        <div className="App">
            <ReactResizeDetector handleWidth handleHeight>
                <BackgroundCanvas />
            </ReactResizeDetector>
            <Router>
                <Route path="/" exact component={Index} />
                <Route path="/freedom-portal/" component={FreedomPortal} />
                <Route path="/la-jetee/" component={LaJetee} />
                <Route path="/murmurate/" component={Murmurate} />
                <Route path="/new-weave/" component={NewWeave} />
                <Route path="/pure-data-and-raspberry-pi-workshops/" component={PureDataRpiWorkshops} />
                <Route path="/webpd/" component={WebPd} />
                <Route path="/possessed-rooms/" component={PossessedRooms} />
            </Router>
        </div>
    )
}

function Index() {
    return (
        <TileContainer>
            <Tile 
                header="racolage.xxx" 
                activityType="project" 
                date="2017..." 
                url="http://racolage.xxx"
                preview="A record label that releases experimental music through spam email, porn streaming sites, tinder, and other spammy release channels..."
            />
            <Tile 
                header="Kialo" 
                activityType="job" 
                date="2018..." 
                url="https://kialo.com"
                preview={"Full-stack web developer at Kialo, a debate platform with the mission of \"making the world more thoughtful.\""}
            />
            <Tile 
                header="Freedom Portal" 
                activityType="project" 
                date="2016-2017" 
                url="/freedom-portal"
                preview="A platform to organize unauthorized shows in the public space, hosted on Wi-Fi networks."
            />
            <Tile 
                header="Volkswagen Future Center" 
                activityType="job" 
                date="2018" 
                url="https://www.volkswagenag.com/en/news/stories/2018/05/never-forget-the-users.html"
                preview="Creative Technologist at one of Volkswagen innovation centers. Working on the future of autonomous vehicles and urban mobility."
            />
            <Tile 
                header="La Jetée (movie-concert)" 
                activityType="project" 
                date="2016" 
                url="/la-jetee"
                preview="A re-score of short film La Jetée by Chris Marker, in a performance that explores digital mobile technology and hyperlocal networks for surround sound diffusion."
            />
            <Tile 
                header="Murmurate"
                activityType="project"
                date="2014-2016" 
                url="/murmurate"
                preview="A networked system exploring new areas of musical performance and audience participation through the use of mobile technology as a medium for sound diffusion."
            />
            <Tile
                header="Possessed Rooms"
                activityType="project"
                date="2016"
                url="/possessed-rooms"
                preview="A series of parasitic performances happening in public computer rooms."
            />
            <Tile 
                header="New Weave"
                activityType="project"
                date="2015"
                url="/new-weave"
                preview="An experimental sound performance where the performers improvise with small audio snippets recorded and sent live by audience members with their smartphones."
            />
            <Tile
                header="WebPd"
                activityType="code"
                date="2012..."
                url="/webpd"
                preview="A 100% JavaScript Pure Data runtime using Web Audio API to play audio in the browser."
            />
            <Tile 
                header="Pure Data and Raspberry Pi"
                activityType="workshop"
                date="2014"
                url="/pure-data-and-raspberry-pi-workshops"
                preview="A workshop to teach how to program and design a pocket-sized instrument with Pure Data and Raspberry Pi."
            />
            <Tile
                header="Old Website"
                activityType="link"
                date="2012"
                url="https://sebpiq.github.io/funktion.fm"
            />
            <TileContact />
        </TileContainer>
    )
}

export default App