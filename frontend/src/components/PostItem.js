import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { votePost } from '../utils/api'

const PostItem = ({ post, posts, vote }) => (
  <div>
    <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
    <span>{post.author}</span>
    <p>{post.body}</p>
    <p>author: {post.author}</p>
    <p>votes: {post.voteScore} | <a href='#!' onClick={() => vote(post.id, 'upVote')}>upVote</a> | <a href='#!' onClick={() => vote(post.id, 'downVote')}>downVote</a>
    </p>
    <p>comments: {post.commentCount}</p>
    <p>timestamp: {post.timestamp}</p>
  </div>
)

function mapStateToProps ({ posts }) {
  return {
    posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    vote: (id, option) => dispatch(votePost(id, option)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem)
