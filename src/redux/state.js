import dialogsReducer from "./dialogsReducer"
import profileReducer from "./pofileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            PostsData: [
                {post: 'Hello' , likeCount: 15, id: 1},
                {post:'It`s my first post.', likeCount: 1, id: 2},
            ],
            newPostText: '',
        },
        messagesPage : {
            FriendsData:[
                {name: 'Friend1', id: '1', avatar: 'https://7ik.ru/800/600/https/redmed.ge/assets/photos/avatar-3.png'},
                {name: 'Friend2', id: '2', avatar: 'https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg'},
                {name: 'Friend3', id: '3', avatar: 'https://i.ya-webdesign.com/images/girl-avatar-png-1.png'},
                {name: 'Friend4', id: '4', avatar: 'https://www.pngjoy.com/pngm/426/26201092_user-avatar-png-picture-avatar-profile-dummy.png'},
                {name: 'Friend5', id: '5', avatar: 'https://i.ya-webdesign.com/images/avatar-clip-female.png'},
            ],
            MessageData: [
                {text:'Hello', id: 1, author: false, avatar: 'https://7ik.ru/800/600/https/redmed.ge/assets/photos/avatar-3.png'},
                {text:'Waddup', id: 2, author: true, avatar: 'https://i.ytimg.com/vi/2OBSbmLqX_Y/maxresdefault.jpg'},
                {text:'How is it going?', id: 2, author: true, avatar: 'https://i.ytimg.com/vi/2OBSbmLqX_Y/maxresdefault.jpg'},
                {text:'Bruh', id: 1, author: false, avatar: 'https://7ik.ru/800/600/https/redmed.ge/assets/photos/avatar-3.png'},
            ],
            newMessageText: ''
        },
        sidebar: {
            FriendsData:[
                {name: 'Friend1', id: '1', avatar: 'https://7ik.ru/800/600/https/redmed.ge/assets/photos/avatar-3.png'},
                {name: 'Friend2', id: '2', avatar: 'https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg'},
                {name: 'Friend3', id: '3', avatar: 'https://i.ya-webdesign.com/images/girl-avatar-png-1.png'},
            ]
        }
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer (this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer (this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer (this._state.sidebar, action)
        this._callSubscriber(this._state)
        },
    
    }
export default store;