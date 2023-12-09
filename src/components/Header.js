import React from 'react'
import Logo from '../assets/DogTinderLogo.png'

const Header = () => {
    return (
        <div className="header">
            <div className='header-container'>
                <h1>
                    <img src={Logo} />
                    Dog Tinder
                </h1>
            </div>
        </div>
    )
}
export default Header
