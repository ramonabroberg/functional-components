import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    return (
        props.savedPosts.map((post) => {
            return (
                <div key={post.title} className={css.SearchItem}>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image} alt="Post"></img>
                    <p>{post.description}</p>
                </div>
            )
        })
    )
}

export default PostItem