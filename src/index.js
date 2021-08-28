import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
// import {addPost, updateNewPostText} from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state= store.getState();
    rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//
//  let rerenderEntireTree = () => {
//     ReactDOM.render(<React.StrictMode><App state={state}  addPost={addPost}/></React.StrictMode>,
//         document.getElementById('root')
//     );
//
// }


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
