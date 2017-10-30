import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVotePost } from '../actions'
import moment from 'moment'

const PostItem = ({ post, posts, vote }) => (
  <div className='post-item'>
    <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
    <p className='text-secondary'>Author: <strong>{post.author}</strong> | {post.commentCount} comments | {moment(post.timestamp).format("DD MMM YYYY")}</p>
    <p>{post.body}</p>

    <p>votes: {post.voteScore} | <a href='#!' onClick={() => vote(post.id, 'upVote')}>upVote</a> | <a href='#!' onClick={() => vote(post.id, 'downVote')}>downVote</a>
    </p>


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
