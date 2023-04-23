import React from 'react'
import "./HeaderArea.css"
import { AiFillHome, AiOutlineSearch, AiOutlineWallet, } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';

import { FaBell, FaFacebookMessenger, FaPlusCircle, FaRegFlag,FaUsers } from 'react-icons/fa';



function HeaderArea() {
  return (
    <div className='homepage'>
        <div className="header">
            <div className="firstheader">
                <div className="logo">
                    <img src="/logo.png" alt="logo"  style={{height:"50px"}} />
                </div>
                <div className="search">
                    <AiOutlineSearch style={{height:"4rem"}} />
                </div>
            </div>
            <div className="middelheader">
                <AiFillHome  fontSize="2.3rem" color='#1877f2'/>
            </div>
            <div className="middelheader">
                <FaRegFlag  fontSize="2.3rem"/>
            </div>
            <div className="middelheader">
                <MdOndemandVideo  fontSize="2.3rem" />
            </div>
            <div className="middelheader">
                <FaUsers  fontSize="2.3rem" />
            </div>
            <div className="middelheader">
                <AiOutlineWallet  fontSize="2.3rem" />
            </div>
        </div>
        <div className="third-header">
            <div className="plus">
                <FaPlusCircle  fontSize="2rem" />
            </div>
            <div className="plus">
                <FaFacebookMessenger  fontSize="2rem" />
            </div>
            <div className="plus">
                <FaBell  fontSize="2rem" />
            </div>
            <div className="plus">
              <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeaderArea