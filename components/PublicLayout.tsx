import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const PublicLayout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-display selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default PublicLayout;
