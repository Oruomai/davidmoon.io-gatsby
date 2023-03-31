import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import About from "../components/about"
import Logos from "../components/logos"
import Work from "../components/work"
import Contact from "../components/contact"

<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="home" >
        <h1 className="header_1">I am</h1>
        <h1 className="header_2">David</h1>
        <h1 className="header_3">Moon</h1>
        <p className="header_4">A recent Electrical Engineering graduate with a minor in Mathematics.</p>
        <p className="header_5">Seeking a full-time position or an internship opportunity.</p>
        <div className="home_button">
          <button className="home_button_1">LinkedIn</button>
          <button className="home_button_2">Github</button>
        </div>
      </div>
      <About />
      <Logos />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}