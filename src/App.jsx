import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Drivers from "./components/Drivers/Drivers"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import Grid from "./components/Grid/Grid"
import Teams from "./components/Teams/Teams"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import VideoPlayer from "./components/Videoplayer/VideoPlayer"
import { useState } from "react"

const App = () => {

  const [playState,setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title title='What we offer'/>
      <Drivers/>
      <Title title='About Us'/>
      <About setPlayState={setPlayState}/>
      <Title title='Grid Images'/>
      <Grid/>
      <Title title='F1 Teams 2024'/>
      <Teams/>
      <Title title='Send us a message'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
