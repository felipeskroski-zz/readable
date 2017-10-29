import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost, fetchDeletePost, fetchComments } from '../actions'
import PostItem from '../components/PostItem'

class Post extends Component {

  state={
    readyToDelete: false
  }
  componentDidMount(){
    const {requestPost, requestComments} = this.props
    const {id} = this.props.match.params
    requestPost(id)
    requestComments(id)
  }

  deletePost = id => {
    const {createPost, history, deletePost} = this.props

    if(this.state.readyToDelete){
      deletePost(id)
      //Redirects to Home after deleting post.
      history.push("/")
    }else{
      this.setState({readyToDelete: true})
    }

  }

  render(){
    const {selectedPost} =  this.props.selectedPost
    const {comments} = this.props.comments
    if(selectedPost){
      return(
        <div>
          <Link to='/'>Back</Link>
          <PostItem post={selectedPost} />
          <div className="btn-group">

            <Link to={`/post/edit/${selectedPost.id}`} className="btn btn-primary">Edit</Link>
            <button type="button"
              className="btn btn-outline-danger"
              onClick={() => this.deletePost(selectedPost.id)}>{this.state.readyToDelete ? 'Are you sure?' : 'Delete'}</button>
          </div>
          {comments && comments.map(c => <p>{c.body}</p> )}
        </div>
      )
    }else{
      return(
        <div>
          Loading post ...
        </div>
      )
    }
  }
}

function mapStateToProps ({ selectedPost, comments }) {
  return {
    selectedPost,
    comments,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPost: id => dispatch(fetchPost(id)),
    deletePost: id => dispatch(fetchDeletePost(id)),
    requestComments: id => dispatch(fetchComments(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
