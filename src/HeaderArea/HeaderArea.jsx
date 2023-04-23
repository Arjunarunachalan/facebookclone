import React from 'react'
import "./HeaderArea.css"
import { AiFillHome, AiOutlineSearch, AiOutlineWallet, } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';

import { FaBell, FaFacebookMessenger, FaPlusCircle, FaRegFlag,FaUsers } from 'react-icons/fa';
import MainArea from '../MainArea/MainArea';



function HeaderArea() {
  return (
    <div className='homepage'>
        <div className="header">
            <div className="firstheader">
                <div className="logo">
                    <img src="/logo.png" alt="logo"  style={{height:"50px"}} />
                </div>
                <div className="Search">
                    <AiOutlineSearch style={{height:"4rem"}}/>
                    <input placeholder="Search Facebook" type="Search"/>
                </div>
            </div>
            <div className="middelheader">
                <div className="icon">

                <AiFillHome  fontSize="2.3rem" color='#1877f2'/>
                </div>
            </div>
            <div className="middelheader">
                <div className="icon">

                <FaRegFlag  fontSize="2.3rem"/>
                </div>
            </div>
            <div className="middelheader">
                <div className="icon">

                <MdOndemandVideo  fontSize="2.3rem" />
                </div>
            </div>
            <div className="middelheader">
                <div className="icon">

                <FaUsers  fontSize="2.3rem" />  
                </div>
            </div>
            <div className="middelheader">
                <div className="icon">

                <AiOutlineWallet  fontSize="2.3rem" />
                </div>
            </div>
        
        <div className="third-header">
                
                <div className="plus">
                    <FaPlusCircle fontSize ="2rem"/>
                </div>
                <div className="plus">
                    <FaFacebookMessenger fontSize ="2rem"/>
                </div>
                <div className="plus">
                    <FaBell fontSize ="2rem"/>
                </div>
                <div className="Pluss">
                    <img src="profile.jpg" alt="dp" style={{height:"40px"}}/>
                </div>
            </div>
    </div>
    <MainArea />
    </div>
  )
}

export default HeaderArea