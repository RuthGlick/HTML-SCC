import React, { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom'


function Body() {

    const { state } = useLocation();
    const post = state;
    const [comments, setComments] = useState([]);
    const [flag, setFlag] = useState(0);

    const getComments = async () => {
        const allcom = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        const comment = await allcom.json()
        setComments(comment);
        flag ? setFlag(0) : setFlag(1);
    }

    return (
        <div class="center">
            <h3>{post.title}</h3><br />
            <h4>{post.body}</h4><br />
            <button class="btn btn-danger margin" onClick={getComments}>comments</button>
            {flag ? comments.map((com, index) => <div key={index} class="card">
                <div class="card-body">
                    <h5 class="card-title">{com.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{com.email}</h6>
                    <p class="card-text">{com.body}</p>
                </div>
            </div>) : null}

        </div>
    )
}

export default Body;
