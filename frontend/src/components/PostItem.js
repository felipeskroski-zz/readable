import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVotePost, fetchDeletePost } from '../actions'
import moment from 'moment'

class PostItem extends Component {
  state={
    readyToDelete: false,
  }
  deletePost = id => {
    const {history, removePost} = this.props
    if(this.state.readyToDelete){
      removePost(id)
      //Redirects to Home after deleting post.
      this.setState({readyToDelete: false})
      history && history.push("/")

    }else{
      this.setState({readyToDelete: true})
    }
  }

  renderDeleteBtn = () => {
    const {post} =  this.props
    const {readyToDelete} =  this.state
    return(
      readyToDelete ?
        <div className="btn-group">
          <button type="button"
            className= 'btn btn-sm btn-danger'
            onClick={() => this.deletePost(post.id)}>Are you sure?</button>
          <button onClick={() => this.deletePost(post.id)} type="button" class="btn btn-sm btn-danger">Yes</button>
          <button onClick={() => this.setState({readyToDelete:false})} type="button" class="btn btn-sm btn-danger">No</button>
        </div>
      :
        <button type="button"
        className= 'btn btn-sm btn-light'
        onClick={() => this.deletePost(post.id)}>Delete</button>
    )
  }

  render(){
    const { post, vote } = this.props
    return(
      <div className='post-item'>
        <Link to={`/${post.category}/${post.id}`}><h3>{post.title}</h3></Link>
        <p className='text-secondary'>Author: <strong>{post.author}</strong> | {post.commentCount} comments | {moment(post.timestamp).format("DD MMM YYYY")}</p>
        <p>{post.body}</p>
        <div className="btn-group" role="group" aria-label="votes" style={{marginRight:20}}>
          <a href='#!' className="btn btn-sm btn-light" onClick={() => vote(post.id, 'upVote')}>↑</a>
          <button type="button" className="btn btn-sm btn-light">
             {post.voteScore} votes
          </button>
          <a href='#!' className="btn btn-sm btn-light" onClick={() => vote(post.id, 'downVote')}>↓</a>
        </div>

        <div className="btn-group">
          <Link to={`/post/edit/${post.id}`} className="btn btn-sm btn-light">Edit</Link>
          {this.renderDeleteBtn()}
        </div>


      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    vote: (id, option) => dispatch(fetchVotePost(id, option)),
    removePost: id => dispatch(fetchDeletePost(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem)
