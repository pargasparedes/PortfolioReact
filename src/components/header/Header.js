import React, { useState } from 'react';
import NavTabs from './nav/NavTabs';
import About from '../pages/about/About';
import Portfolio from '../pages/portfolio/Portfolio';
import Contact from '../pages/contact/Contact';
import Resume from '../pages/resume/Resume';
import './header.css'

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='headContainer'>
            <div className='headerContainer'>
                <div>
                    <h1 className='title'>David Pargas Paredes</h1>
                </div>
                <div>
                    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
            </div>
            <div className='pagesContainer'>
                {renderPage()}
            </div>
        </div>
      )
}

export default Header;