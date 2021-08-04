import 'materialize-css/dist/css/materialize.min.css';
import Navigation from './components/Navigation';
import Portfolio from './components/pages/Portfolio';
import React, {useState} from 'react';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import { render } from 'react-dom';


export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }

    if (currentPage === 'About') {
      return <About />;
    }

    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }

    if (currentPage === 'Contact') {
      return <Contact />
    }

    return <Resume />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}>
        
      </Navigation>
      {renderPage()}

      <Footer />
    </div>
  )

}


