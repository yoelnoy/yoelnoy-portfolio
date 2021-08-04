import React, { useState, useEffect } from 'react'
import './App.css';
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  const [aboutScroll, setAbouScroll] = useState(false);
  const [fotterScroll, setFooterScroll] = useState(false);
  const [language, setLanguage] = useState("EN")

  

  return (
    <div className="App">
      {/* <Test /> */}
      <Hero aboutScroll={aboutScroll} setAbouScroll={setAbouScroll} language={language} setLanguage={setLanguage} fotterScroll={fotterScroll} setFooterScroll={setFooterScroll} />
      <About aboutScroll={aboutScroll} setAbouScroll={setAbouScroll} language={language} />
      <Projects language={language} />
      <Contact language={language}/>
      <Footer fotterScroll={fotterScroll} setFooterScroll={setFooterScroll}/>
    </div>
  );
}

export default App;
