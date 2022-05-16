const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})
    
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text})

const profileReducer = (state, action) => {

    switch (action.type) {
        default: return state;

        case ADD_POST: 
        const newPost = { 
            post: state.newPostText,
            likeCount: 0,
            id: 3,
        };
        state.PostsData.push(newPost);
        return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;  
    }
}
export default profileReducer;