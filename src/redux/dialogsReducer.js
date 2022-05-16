const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

export const sendMessageActionCreator = (text) => ({type: ADD_MESSAGE, messageContent: text})
export const changeMessageTextActionCreator = (text) => ({type:UPDATE_MESSAGE , text: text})

const dialogsReducer = (state, action) => {

    switch (action.type) {
        default: return state;

        case ADD_MESSAGE:
            const newMessage = {
                text: state.newMessageText, 
                id: 1, 
                author: true, 
                avatar: 'https://i.ytimg.com/vi/2OBSbmLqX_Y/maxresdefault.jpg',
             }
             state.MessageData.push(newMessage)  
             return state;

        case UPDATE_MESSAGE: 
             state.newMessageText = action.text; 
             return state;

    }
}

export default dialogsReducer;