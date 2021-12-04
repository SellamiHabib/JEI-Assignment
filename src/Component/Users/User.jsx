import React, {useEffect, useState} from "react";
import axios from "axios";
import "./User.css";


const User = (props) => {

    const userLists = props.props.Data;
    const id = props.props.i
    const user = userLists[id];

    const url = "https://jsonplaceholder.typicode.com/posts"
    let lastPosts = [{}];
    const [Posts, setPosts] = useState([]);

    const fetchUserData = () => {
    console.log(user);
        axios.get(url)
            .then(
                (response) => {
                    const allPosts = response.data;
                    for (let i = 0; i < 5; ++i) {
                        let current = ((id - 1) * 10) + (i + 4);
                        lastPosts[i] = (allPosts[current]);
                    }
                    setPosts(lastPosts);
                   // console.log(userLists[0].name);
                }
            )

    }
    useEffect(() => {
        fetchUserData();

    }, [userLists]);

    const createPosts = () => {
        const rows = [];

        for(let i = 0 ; i<5 ;++i)
        {
            if(!Posts[i])
                return <div> Loading ...</div>
            rows.push(
                <div className="Post">
                    <h2> {Posts[i].title}</h2>
                    <p> {Posts[i].body}</p>
                 </div>
            );

        }
        return (
            <div className="Posts">
                {rows}
            </div>
        )
    }
    if(!user)
        return <div>Loading ...</div>
    return (
        <div className="User">
            <h1>Welcome to {user.name}'s post history</h1>
            {
                createPosts()
            }
        </div>
    );
}

export default User
