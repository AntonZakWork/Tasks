import React from 'react';
import classes from './NavFriend.module.css'

const NavFriend = (props) => {
    return (
        <div className={classes.sidebarWrapper}>
        <div><img className = {classes.sidebarAv}src={props.avatar} alt="" /></div>
        <div className = {classes.sidebarFriendsName}>{props.name}</div>
        </div>
    )
}

export default NavFriend;