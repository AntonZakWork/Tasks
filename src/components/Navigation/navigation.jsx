import React from 'react';
import { NavLink } from 'react-router-dom';
import NavFriend from './NavFriend/NavFriend';
import classes from './navigation.module.css';

const Navigation = (props) => {
    const friendsData = props.sidebarFriends.map(el =><NavFriend name = {el.name} avatar = {el.avatar} key = {el.id}/> )
    return (
        <div className={classes.sidebar}>
        <nav >
            <div className={classes.item}>
            <NavLink to='/profile' className={classes.item} activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
            <NavLink to='/dialogs' className={classes.item} activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
            <NavLink to='/news' className={classes.item} activeClassName={classes.active} >News</NavLink>
            </div>
            <div className={classes.item}>
            <NavLink to='/music' className={classes.item} activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
            <NavLink to='/settings' className={classes.item} activeClassName={classes.active}>Settings</NavLink>
            </div>
        </nav>
        <div className = {classes.sidebarFriendsContainer}>
            {friendsData}
        </div>
        </div>
    )
}


export default Navigation;