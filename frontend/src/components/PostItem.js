import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVotePost } from '../actions'

const PostItem = ({ post, posts, vote }) => (
  <div>
    <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
    <p>{post.body}</p>
    <p>author: {post.author}</p>
    <p>votes: {post.voteScore} | <a href='#!' onClick={() => vote(post.id, 'upVote')}>upVote</a> | <a href='#!' onClick={() => vote(post.id, 'downVote')}>downVote</a>
    </p>
    <p>comments: {post.commentCount}</p>
    <p>timestamp: {post.timestamp}</p>
    <hr/>
  </div>
)

function mapStateToProps ({ posts }) {
  return {
    posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    vote: (id, option) => dispatch(fetchVotePost(id, option)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem)
