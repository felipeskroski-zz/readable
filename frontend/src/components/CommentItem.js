import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVoteComment, deleteComment, fetchUpdateComment } from '../actions'
import moment from 'moment'

class CommentItem extends Component {
  state={
    readyToDelete: false,
    editMode: false,
    body:''
  }
  //Submits post
  handleSubmit = e => {
    const {fetchUpdateComment} = this.props
    const {comment} = this.props
    const { body } = this.state
    e.preventDefault()
    const data = {
      body,
    };
    //Dispatches action with data to update comment
    fetchUpdateComment(comment.id, data)

    this.setState({editMode: false})
  }
  onDeleteComment = id => {
    const {deleteComment} = this.props
    if(this.state.readyToDelete){
      deleteComment(id)
    }else{
      this.setState({readyToDelete: true})
    }
  }
  onEditComment = e =>{
    const {comment} = this.props
    e.preventDefault()
    this.setState({editMode: this.state.editMode ? false : true, body: comment.body})
  }

  onVoteComment = (e, id, option) =>{
    const {fetchVoteComment} = this.props
    e.preventDefault()
    fetchVoteComment(id, option)
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  renderDeleteBtn(){
    const {comment} = this.props
    const {readyToDelete} =  this.state
    return(
      readyToDelete ?
        <div className="btn-group">
          <button type="button"
            className= 'btn btn-sm btn-danger'
            onClick={() => this.onDeleteComment(comment.id)}>Are you sure?</button>
          <button onClick={() => this.onDeleteComment(comment.id)} type="button" className="btn btn-sm btn-danger">Yes</button>
          <button onClick={() => this.setState({readyToDelete:false})} type="button" className="btn btn-sm btn-danger">No</button>
        </div>
      :
        <button type="button"
        className= 'btn btn-sm btn-light'
        onClick={() => this.onDeleteComment(comment.id)}>Delete</button>
    )
  }
  renderBody(){
    const {comment} = this.props
    if(this.state.editMode){
      return(
        <form onSubmit={this.handleSubmit} className='d-flex justify-content-between'>
          <div className="form-group" style={{flex:1}} >
            <textarea
              className="form-control"

              id="body" rows="1"
              onChange={this.handleChange}
              value={this.state.body}
              name="body"
              placeholder="Post body"
            />

          </div>
          <button type="submit" className="btn btn-primary" style={{height: 38, marginLeft: 10}}>Done</button>
        </form>
      )
    }else{
      return(
        <p>{comment.body}</p>
      )

    }
  }
  render(){
    const {comment, fetchVoteComment} = this.props
    return(
      <div>
        <hr/>
        <p className='text-secondary'>Author: <strong>{comment.author}</strong> | {moment(comment.timestamp).format("DD MMM YYYY")}</p>
        {this.renderBody()}
        <div className="btn-group" role="group" aria-label="votes" style={{marginRight:20}}>
          <a href='upvote' className="btn btn-sm btn-light" onClick={(e) => this.onVoteComment(e, comment.id, 'upVote')}>↑</a>
          <button type="button" className="btn btn-sm btn-light">
             {comment.voteScore} votes
          </button>
          <a href='downvote' className="btn btn-sm btn-light" onClick={(e) => this.onVoteComment(e, comment.id, 'downVote')}>↓</a>
        </div>
        <div className="btn-group">
          <a href='edit' onClick={(e) => this.onEditComment(e)} className="btn btn-light btn-sm">Edit</a>
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

export default connect(
  mapStateToProps,
  { fetchVoteComment, deleteComment, fetchUpdateComment }
)(CommentItem)
