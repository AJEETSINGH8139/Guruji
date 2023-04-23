
import React from 'react'

function Navbar() {
    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <img className='logo-img' src='https://bizimages.withfloats.com/tile/632966108245d20001ef2dc7.jpg' alt='this is logo' />
                <h1>Guruji</h1>
            </div>

            <div className='logo-button'>
                <a href='#'>Home</a>
                <a href='#'>Call with Astrologer</a>
                <a href='#'>Live (Comming soon)</a>
            </div>

            <div className='logo-dp'>
                <img className='logo-dp' src='https://tricks.nayag.com/wp-content/uploads/2022/10/Girls-DP-1-1024x1024.jpg' alt='This is dp' />
            </div>
        </nav>
    )
}

export default Navbar

