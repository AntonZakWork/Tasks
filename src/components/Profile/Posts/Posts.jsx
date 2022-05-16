import Post from './Post/Post';
import React from 'react';
import classes from './Posts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/pofileReducer';



const Posts = (props) => {

    const MessagesArr = props.PostsData.map(el => <Post key = {el.id} message={el.post} likeCount = {el.likeCount}/>)
    
    let newPostElement = React.createRef()

    const AddPost = () => {
        props.dispatch(addPostActionCreator());
        props.dispatch(updateNewPostTextActionCreator(''))
        // this.updateNewPostText('');
       
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))

    }


    return (
        <div>
            <div>
                Posts
            </div>

            <div className={classes.item}>
                <h2>New post</h2>
                
                <div>
                <textarea className={classes.form} 
                    onChange = {onPostChange}
                    ref = {newPostElement} 
                    value = {props.newPostText}
                    cols="30" rows="5"/>
                </div>

                <div>
                <button 
                className={classes.button} 
                onClick = {AddPost}>Add post</button>
                </div>

            </div>

            <div>
                {MessagesArr}
            </div>
           
         </div>
         
    )
}

export default Posts;



         