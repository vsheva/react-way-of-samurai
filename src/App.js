import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/store";

const App = (props) => {
    return (
        // <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={()=><Dialogs store={props.store}   />}  />
                    <Route path="/profile" render= {()=><Profile profilePage={props.state.profilePage}
                                                                 dispatch = {props.dispatch}
                                                                   />}/>
                   {/* posts={props.state.profilePage.posts}*/}

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>

                </div>
            </div>
        // </BrowserRouter>
    );
};

export default App;
