import React from 'react';
import "./Header.css";
import  AvatarIcon  from "@material-ui/core/Avatar";
import  SearchIcon  from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from "../components/images/logo.jpg";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo" link to='/'>
                       <img className="img" src={logo} alt=""/>
                </div>
            </div>
            <div className="header__right">
            <div className="header__option">Dashboard</div>
                <div className="header__icons">
                    <SearchIcon className="header__icon"/>
                    <NotificationsNoneIcon className="header__icon"/>
                    <AvatarIcon className="header__icon"  src="https://lh3.googleusercontent.com/a-/AOh14Gg_AEfDb01KlfRnGcf1KQWWazYCFCbTXGQFRcVsyg=s70-p-k-rw-no" alt="badmus"/>
                    <MoreVertIcon className="header__icon"/>
           
                </div>
                </div>
        </div>
    )
}

export default Header;
