import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
