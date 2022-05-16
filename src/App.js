import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navigation from './components/Navigation/navigation';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className='wrapper'>
        <Header />
        <Navigation sidebarFriends = {props.getState().sidebar.FriendsData}/>
        <div className = 'wrapperContent'>
            <Route path ='/profile' render = {()=>
                <Profile 
                    PostsData = {props.getState().profilePage.PostsData}
                    dispatch = {props.dispatch}
                    newPostText = {props.getState().profilePage.newPostText}/>}/>

                <Route path ='/dialogs/' render = {() =>
                    <Dialogs 
                        MessageData = {props.getState().messagesPage.MessageData} 
                        FriendsData = {props.getState().messagesPage.FriendsData}
                        dispatch = {props.dispatch}
                        newMessageText = {props.getState().messagesPage.newMessageText}/>}/>
            <Route path ='/news' render = {()=> <News/>}/>
            <Route path ='/music' render = {() => <Music/>}/>
            <Route path ='/settings' render = {() => <Settings/>}/>
        </div>
    </div>
  );
}

export default App;
