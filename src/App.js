import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactResizeDetector from 'react-resize-detector'
import './App.css'
import BackgroundCanvas from './BackgroundCanvas'
import TileContainer from './TileContainer'
import Tile from './Tile'
import FreedomPortal from './pages/FreedomPortal'
import LaJetee from './pages/LaJetee'
import Murmurate from './pages/Murmurate'
import NewWeave from './pages/NewWeave'
import PureDataRpiWorkshops from './pages/PureDataRpiWorkshops'
import WebPd from './pages/WebPd'
import PossessedRooms from './pages/PossessedRooms'


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
                header="Freedom Portal" 
                activityType="project" 
                date="2016-2017" 
                url="/freedom-portal"
            />
            <Tile 
                header="La Jetée (movie-concert)" 
                activityType="project" 
                date="2016" 
                url="/la-jetee"
            />
            <Tile 
                header="Murmurate"
                activityType="project"
                date="2014-2016" 
                url="/murmurate"
            />
            <Tile
                header="Possessed Rooms"
                activityType="project"
                date="2016"
                url="/possessed-rooms"
            />
            <Tile 
                header="New Weave"
                activityType="project"
                date="2015"
                url="/new-weave"
            />
            <Tile
                header="WebPd"
                activityType="project"
                date="2012-..."
                url="/webpd"
            />
            <Tile 
                header="Pure Data and Raspberry Pi"
                activityType="workshop"
                date="2014"
                url="/pure-data-and-raspberry-pi-workshops"
            />
            <Tile
                header="Old Website"
                activityType="link"
                date="2012"
                url="https://sebpiq.github.io/funktion.fm"
            />
        </TileContainer>
    )
}

export default App