import React from 'react';
import './App.css';
import Header from './Header'
import Banner from './Banner'
import Projects from './Projects';
import AboutMe from './AboutMe';
import OtherWorks from './OtherWorks';
import Footer from './Footer';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Projects />
      <OtherWorks />
      <AboutMe />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
