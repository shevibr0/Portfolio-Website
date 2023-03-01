import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Recommendations from "./components/recommendations/Recommendations";
import Contact from './components/contact/Contact';
import Massage from './components/contact/Massage';

const App =()=> {
  return (
    <>
    <Sidebar/>
  <main className='main'>
    <Home/>
    <About/>
    <Resume/>
    <Portfolio/>
    <Recommendations/>
    <Contact/>
    <Massage/>
  </main>
    </>
  );
}

export default App;
