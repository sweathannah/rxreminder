// src/components/Header.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#001720] text-white px-6 py-12 md:px-16">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
            {/* Logo & Description */}
            <div className="space-y-4 col-span-2 md:col-span-1">
                <img src="/images/logo.svg" alt="RxReminder Logo" />
                <p className="text-[0.8rem] text-[#FFFFFF] font-[400]">
                    RxReminder helps you stay on track with your medications, protect your health and live with peace of mind.
                </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2">
                <h4 className="font-semibold text-white">Quick Links</h4>
                <ul className="text-[0.8rem] text-[#D3D3D3] space-y-1">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Why Choose Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Join Waitlist</a></li>
                </ul>
            </div>

            {/* Socials */}
            <div className="space-y-2">
                <h4 className="font-semibold text-white">Socials</h4>
                <p className="text-[0.8rem] text-gray-300 flex items-center gap-2">
                    Follow us on 
                    <img src="images/x.svg" alt="X icon" className="w-4 h-4" />
                </p>
            </div>

            {/* Partnership Section */}
            <div className="space-y-4 md:col-span-1">
                <h4 className="font-semibold text-white">Partner With Us for a Healthier Tomorrow</h4>
                <p className="text-[0.8rem] text-gray-300">
                    Have questions, partnership ideas or investment inquiries? Our team is always open to building new connections. Reach out to us anytime, we look forward to hearing from you.
                </p>
                <a href='https://wa.link/9u6bp3' className="bg-[#086C85] hover:bg-[#0B7A94] text-white font-medium py-2 px-6 rounded-2xl text-sm">
                    Get In Touch
                </a>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            Copyright © 2025 RxReminder. All rights reserved.
        </div>
        </footer>
    );
};

export default Footer;

  