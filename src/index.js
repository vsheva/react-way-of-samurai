import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "Hi, how are you?", like: 12},
    {id: 2, message: "It's my first post", like: 11},
    {id: 3, message: "It's my first job", like: 12}
]


let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Viktor"},
    {id: 5, name: "Valera"},
    {id: 6, name: "Mike"}
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your IT lessons?"},
    {id: 3, message: "YO"},
    {id: 4, message: "YO"},
    {id: 5, message: "YO"}
]


ReactDOM.render(

  <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
