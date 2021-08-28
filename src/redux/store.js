import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", like: 12},
                {id: 2, message: "It's my first post", like: 11},
                {id: 3, message: "It's my first job", like: 12}
            ],
            newPostText: "New Post"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Viktor"},
                {id: 5, name: "Valera"},
                {id: 6, name: "Mike"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your IT lessons?"},
                {id: 3, message: "YO"},
                {id: 4, message: "YO"},
                {id: 5, message: "YO"}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsReducer = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarReducer = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export const addPostActionCreator = () => {
    const ADD_POST = "ADD-POST";
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
    const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export const sendMessageCreator = () => ({type:SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY, body:body })


export default store;

window.store = store;





    /*dispatch(action) {
        if (action.type === "ADD_POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state);
        }
    }

*/












/* if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        }else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let body=this._state.dialogsPage.newMessageBody ;
            this._state.dialogsPage.newMessageBody=" ";
            this._state.dialogsPage.messages.push({id: 6, message: body});// запушиваем в мессадж след. строку
            this._callSubscriber(this._state);
        }*/





















/*export const subscribe = (observer) => {
    rerenderEntireTree = observer;
    rerenderEntireTree(state); // удалить
}*/


/*export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}*/


/*
let rerenderEntireTree = () => {
    console.log("State changed");
}

let state = {

    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", like: 12},
            {id: 2, message: "It's my first post", like: 11},
            {id: 3, message: "It's my first job", like: 12}
        ],
        newPostText: "New Post"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Sasha"},
            {id: 4, name: "Viktor"},
            {id: 5, name: "Valera"},
            {id: 6, name: "Mike"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your IT lessons?"},
            {id: 3, message: "YO"},
            {id: 4, message: "YO"},
            {id: 5, message: "YO"}
        ]
    }
}
*/


// let posts = [
//     {id: 1, message: "Hi, how are you?", like: 12},
//     {id: 2, message: "It's my first post", like: 11},
//     {id: 3, message: "It's my first job", like: 12}
// ]
//
// let dialogs = [
//     {id: 1, name: "Dimych"},
//     {id: 2, name: "Sveta"},
//     {id: 3, name: "Sasha"},
//     {id: 4, name: "Viktor"},
//     {id: 5, name: "Valera"},
//     {id: 6, name: "Mike"}
// ]
//
// let messages = [
//     {id: 1, message: "Hi"},
//     {id: 2, message: "How is your IT lessons?"},
//     {id: 3, message: "YO"},
//     {id: 4, message: "YO"},
//     {id: 5, message: "YO"}
// ]