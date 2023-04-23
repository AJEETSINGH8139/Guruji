import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <header className='header'>
         <Navbar />
         <div className='header-content'>
            <h1>"Astrology for Clarity"</h1>
            <p>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy</p>
            <button>Consult Now</button>
            <div className='header-options'>
                <div>
                <i className="fa-solid fa-handshake-angle fa-2xl"></i>
                <span>24 * 7 Customer Support</span>
                </div>
                <div>
                <i className="fa-solid fa-arrow-rotate-left fa-2xl"></i>
                <span>100% Refund if unsatisfied</span>
                </div>
                <div>
                <i className="fa-solid fa-file-shield fa-2xl"></i>
                <span>Private & Confidential</span>
                </div>
                <div>
                <i className="fa-solid fa-lock fa-2xl"></i>
                <span>Verified Astrologer</span>
                </div>
                <div>
                <i className="fa-solid fa-shield-halved fa-2xl"></i>
                <span>Secure Payment</span>
                </div>
            </div>
            <div>
                
            </div>
         </div>
        </header>
    )
}

export default Header
