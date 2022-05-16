import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    return(
    <div className = {classes.friendsDialogContainer}>
        <div className ={classes.user}>
            <img className={classes.userPicture} src={props.avatar} alt="" />
        </div>
        <div>
           <NavLink to = {'/dialogs/' + props.id} activeClassName = {classes.active} className = {classes.dialogItems}>{props.name}</NavLink>
        </div>
        
    </div>
    )
}


export default DialogItem;