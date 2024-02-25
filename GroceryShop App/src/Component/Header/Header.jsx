import React from 'react'
import './Header.css'
import logo from "../Assets/brand1.png"

const Header = () => {
    return (
        <div className='Header-container'>
            <div className='logo-search-cont'>
                <img src={logo} alt="" />
                <div>
                    <input type="text" name="" id="" />
                </div>
            </div>
        </div>
    )
}

export default Header