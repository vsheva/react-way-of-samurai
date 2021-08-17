import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    /*let posts = [
        {id: 1, message: "Hi, how are you?", like: 12},
        {id: 2, message: "It's my first post", like: 11},
        {id: 3, message: "It's my first job", like: 12}
    ]*/

    let postElements = props.posts.map(p => <Post message={p.message} like={p.like}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postElements}

                {/*<Post message={postsData[0].message} like={postsData[0].like}/>
                <Post message={postsData[1].message} like={postsData[1].like}/>*/}
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