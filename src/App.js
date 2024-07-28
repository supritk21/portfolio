import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from '/src/components/Header/header.js'
import Header from './components/header/header';
import Home from './components/header/home'
import About from './components/header/about';
import Contact from './components/header/contact';
import Footer from './components/footer/footer';
import Body from './components/body/body';
import Achievements from './components/header/achievements';

function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements/>}/>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
    </Router>
    <Body/>
    <Footer/>
    
    </div>
  );
}

export default App;
