import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
//import { fetchVotePost } from '../actions'

const CommentItem = ({comment}) => (
  <div>
    <hr/>
    <h3>{comment.title}</h3>
    <p>{comment.body}</p>
    <p>author: {comment.author}</p>
    <p>votes: {comment.voteScore} | <a href='#!' onClick={() => {}}>upVote</a> | <a href='#!' onClick={() => {}}>downVote</a>
    </p>
    <p>timestamp: {comment.timestamp}</p>

  </div>
)

function mapDispatchToProps (dispatch) {
  return {
    //vote: (id, option) => dispatch(fetchVotePost(id, option)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CommentItem)
