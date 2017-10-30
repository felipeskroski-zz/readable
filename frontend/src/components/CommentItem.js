import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVoteComment, deleteComment } from '../actions'
import moment from 'moment'

class CommentItem extends Component {
  state={
    readyToDelete: false
  }
  onDeleteComment = id => {
    const {removeComment} = this.props
    if(this.state.readyToDelete){
      removeComment(id)
    }else{
      this.setState({readyToDelete: true})
    }
  }
  renderDeleteBtn(){
    const {comment} = this.props
    if(this.state.readyToDelete){
      return(
        <div className="btn-group">
          <button type="button"
            className= 'btn btn-sm btn-danger'
            onClick={() => this.onDeleteComment(comment.id)}>Are you sure?</button>
          <button onClick={() => this.onDeleteComment(comment.id)} type="button" class="btn btn-sm btn-danger">Yes</button>
          <button onClick={() => this.setState({readyToDelete:false})} type="button" class="btn btn-sm btn-danger">No</button>
        </div>
      )
    }else{
      return(
      <button type="button"
        className= 'btn btn-sm btn-light'
        onClick={() => this.onDeleteComment(comment.id)}>Delete</button>
      )
    }
  }
  render(){
    const {comment, comments, vote} = this.props
    return(
      <div>
        <hr/>
        <h3>{comment.title}</h3>
        <p className='text-secondary'>Author: <strong>{comment.author}</strong> | {moment(comment.timestamp).format("MM-DD-YYYY")}</p>
        <p>{comment.body}</p>
        <p>votes: {comment.voteScore} | <a href='#!' onClick={() => vote(comment.id, 'upVote')}>upVote</a> | <a href='#!' onClick={() => vote(comment.id, 'downVote')}>downVote</a>
        </p>
        <div className="btn-group">
          <Link to={`/post/edit/${comment.id}`} className="btn btn-primary btn-sm">Edit</Link>
          {this.renderDeleteBtn()}
        </div>
      </div>
    )
  }
}
//to force refresh when data changes elsewhere
function mapStateToProps ({ comments }) {
  return {
    comments,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    vote: (id, option) => dispatch(fetchVoteComment(id, option)),
    removeComment: id => dispatch(deleteComment(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentItem)
