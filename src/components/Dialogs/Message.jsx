import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
    if (props.author) {
    return (
        <div className = {classes.message}>
            <div></div>
            <div className = {`${classes.text} ${classes.author}`}>{props.text}</div>
            <div className={classes.avatarContainer}>
                <img className = {`${classes.contextAvatar} ${classes.authorMessage}`} src={props.avatar} alt="" />
            </div>
            
        </div>
        )
    }
    return (
        <div className = {classes.message}>
            <div className={classes.avatarContainer}>
                <img className = {classes.contextAvatar} src={props.avatar} alt="" />
            </div>
            <div className = {classes.text}>{props.text}</div>
            <div></div>
        </div>
    )
}

export default Message;