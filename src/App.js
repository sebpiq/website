import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
import Brag from './pages/Brag'
import BlogPost from './pages/BlogPost'
import RacolageXxx from './pages/RacolageXxx'
import Hyperexistence from './pages/Hyperexistence'
import WebdevPortfolio from './pages/WebdevPortfolio'
// !!! Must be imported last to override other css properties properly
import './responsive.css'
import Articles from './pages/Articles'
import TileArticles from './TileArticles'

function App() {
    return (
        <div className="App">
            <ReactResizeDetector handleWidth handleHeight>
                <BackgroundCanvas />
            </ReactResizeDetector>
            <Router>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/freedom-portal/" component={FreedomPortal} />
                    <Route path="/racolagexxx/" component={RacolageXxx} />
                    <Route path="/hyperexistence/" component={Hyperexistence} />
                    <Route path="/la-jetee/" component={LaJetee} />
                    <Route path="/murmurate/" component={Murmurate} />
                    <Route path="/new-weave/" component={NewWeave} />
                    <Route path="/pure-data-and-raspberry-pi-workshops/" component={PureDataRpiWorkshops} />
                    <Route path="/webpd/" component={WebPd} />
                    <Route path="/possessed-rooms/" component={PossessedRooms} />
                    <Route path="/brag/" component={Brag} />
                    <Route path="/webdev-portfolio" component={WebdevPortfolio}></Route>
                    <Route path="/articles/:slug" component={BlogPost} />
                    <Route path="/articles/" component={Articles} />

                    <Redirect from="/*" to="/" />
                    <Route component={Index} />
                </Switch>
            </Router>
        </div>
    )
}

function Index() {
    return (
        <TileContainer>
            <Tile 
                header="CV" 
                url="/brag"
                preview="Permanent positions, concerts, teaching, residencies."
            />
            <Tile 
                header="Freelance Dev" 
                url="/webdev-portfolio"
                preview="Portfolio of projects and techs used."
            />
            <TileArticles />
            <TileContact />
            <Tile
                header="WebPd"
                activityType="code"
                date="2012-now"
                url="/webpd"
                preview="A compiler for the Pure Data audio programming language allowing to run .pd patches in web pages."
            />
            <Tile 
                header="racolage.xxx" 
                activityType="project" 
                date="2017-2020" 
                url="/racolagexxx"
                preview="A record label that releases experimental music through spam email, porn streaming sites, tinder, and other spammy release channels..."
            />
            <Tile 
                header="Freedom Portal" 
                activityType="project" 
                date="2016-2017" 
                url="/freedom-portal"
                preview="A platform to organize unauthorized shows in the public space, hosted on Wi-Fi networks."
            />
            <Tile 
                header="Murmurate"
                activityType="project"
                date="2014-2016" 
                url="/murmurate"
                preview="A networked system exploring new areas of musical performance and audience participation through the use of mobile technology as a medium for sound diffusion."
            />
            <Tile 
                header="hyperexistence" 
                activityType="project"
                date="2020-now" 
                url="/hyperexistence"
                preview="(Work In Progress). A web essay on individualism in late capitalist society."
            />
            <Tile 
                header="La Jetée (movie-concert)" 
                activityType="project" 
                date="2016" 
                url="/la-jetee"
                preview="A re-score of short film La Jetée by Chris Marker, in a performance that explores digital mobile technology and hyperlocal networks for surround sound diffusion."
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
        </TileContainer>
    )
}

export default App