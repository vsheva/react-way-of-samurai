import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    /*let posts = [
        {id: 1, message: "Hi, how are you?", like: 12},
        {id: 2, message: "It's my first post", like: 11},
        {id: 3, message: "It's my first job", like: 12}
    ]*/


    return (<div>
            <ProfileInfo/>
            <MyPosts  posts={props.posts}/>
        </div>
    )
};

export default Profile;
