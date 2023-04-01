import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Landing from "../components/landing"
import About from "../components/about"
import Logos from "../components/logos"
import Work from "../components/work"
import Contact from "../components/contact"

<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Landing />
      <About />
      <Logos />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}