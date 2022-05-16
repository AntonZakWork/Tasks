import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts 
            PostsData = {props.PostsData} 
            dispatch = {props.dispatch}
            newPostText = {props.newPostText}/>
         </div>
    )
}

export default Profile;

