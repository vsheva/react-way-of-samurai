import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} like={p.like}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }




    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postElements}

            </div>
        </div>
    );
};

export default MyPosts;














/*let posts = [
        {id: 1, message: "Hi, how are you?", like: 12},
        {id: 2, message: "It's my first post", like: 11},
        {id: 3, message: "It's my first job", like: 12}
    ]
*/