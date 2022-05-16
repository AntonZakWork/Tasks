import React from 'react';
import { changeMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';

import DialogItem from './DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message';




const Dialogs = (props) => {

    const newMessage = React.createRef();

    const FriendsArr = props.FriendsData.map(el => <DialogItem author = {el.author} avatar = {el.avatar} key = {el.id} name={el.name} id={el.id}/>)
    const MessageArr = props.MessageData.map(el =><Message author = {el.author} avatar = {el.avatar} key = {el.id} text ={el.text}/> )
    
    const sendMessage = () => {
        // const text = newMessage.current.value;   
        props.dispatch(sendMessageActionCreator())
        props.dispatch(changeMessageTextActionCreator())

    }
    const changeMessageText = () => {
        const text = newMessage.current.value;
        props.dispatch(changeMessageTextActionCreator(text))
        
    }

    return (
        <div>
            <div className = {classes.dialogWrapper}>

                <div>
                    {FriendsArr} 
                </div>

                <div className = {classes.messageContainer}>
                    {MessageArr}
                </div>
                <div className = {classes.textarea}>
                <textarea className = {classes.textareaInput} onChange = {changeMessageText} ref  = {newMessage} value = {props.newMessageText} cols="15" rows="10"/>
                <img id ={classes.sendButton} onClick = {sendMessage} src="https://avatars.mds.yandex.net/i?id=eb5437bea5ce9e1f288c9e98d47597eb-5553356-images-thumbs&n=13&exp=1" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;
