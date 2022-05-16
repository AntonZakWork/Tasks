import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.wrapper}>
        <div className={classes.item}>
                <div className={classes.imgContainer}>
                <img src='https://www.clipartmax.com/png/middle/144-1448593_avatar-icon-teacher-avatar.png' alt=''/>
                </div>
                <div className={classes.postText}>
                    {props.message}
                </div>
                <div>
                    Likes: {props.likeCount}
                </div>
            
         </div>
         </div>
    )
}

export default Post;