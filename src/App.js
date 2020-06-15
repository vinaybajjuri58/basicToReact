import React from 'react'
import Navabar from './Components/Navbar'
import Footer from './Components/Footer'
import Jumbotron from './Components/Jumbotron'
import Feature from './Components/Feature'
import Contact from './Components/Contact'
// import Addition from './Addition'

const App =()=>{
    return(
        <div>
            <Navabar />
            <Jumbotron />
            {/* <h1>Vinay </h1> */}
            {/* <Addition /> */}
            <Feature />
            <Contact />
            <Footer />
        </div>
    )
}
export default App ;