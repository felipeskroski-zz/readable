import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVoteComment } from '../actions'
import moment from 'moment'

const CommentItem = ({comment, comments, vote}) => (
  <div>
    <hr/>
    <h3>{comment.title}</h3>
    <p className='text-secondary'>Author: <strong>{comment.author}</strong> | {moment(comment.timestamp).format("MM-DD-YYYY")}</p>
    <p>{comment.body}</p>
    <p>votes: {comment.voteScore} | <a href='#!' onClick={() => vote(comment.id, 'upVote')}>upVote</a> | <a href='#!' onClick={() => vote(comment.id, 'downVote')}>downVote</a>
    </p>
  </div>
)
//to force refresh when data changes elsewhere
function mapStateToProps ({ comments }) {
  return {
    comments,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    vote: (id, option) => dispatch(fetchVoteComment(id, option)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentItem)
