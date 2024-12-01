import React from 'react';
import MobileNav from './mobile-nav';
import Nav from './nav';

const Header: React.FC = () => {
    return (
        <header className='h-1/4 w-screen bg-primary '>
            <div className="xl:hidden  fixed top-0 right-0">
                <MobileNav />
            </div>
            <div className="hidden  xl:block bg-white">
                <Nav />
            </div>
        </header>
    );
};

export default Header;