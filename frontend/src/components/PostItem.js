import React from 'react';
import {Link} from 'react-router-dom'

const PostItem = ({ post }) => (
  <div>
    <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
    <span>{post.author}</span>
    <p>{post.body}</p>
    <p>author: {post.author}</p>
    <p>votes: {post.voteScore}</p>
    <p>comments: {post.commentCount}</p>
    <p>timestamp: {post.timestamp}</p>
  </div>
)

export default PostItem
