"use client"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimationWrapper from './components/AnimationWrapper'

const Home = () => {
  return (
    <AnimationWrapper>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </main>
    </AnimationWrapper>
  )
}

export default Home;
