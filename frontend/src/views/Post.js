import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost, fetchDeletePost } from '../actions'
import PostItem from '../components/PostItem'

class Post extends Component {
  componentDidMount(){
    const {requestPost} = this.props
    const {id} = this.props.match.params
    requestPost(id)
  }
  state={
    readyToDelete: false
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
    if(selectedPost){
      return(
        <div>
          <Link to='/'>Back</Link>
          <PostItem post={selectedPost} />
          <div className="btn-group">
            <button type="button" className="btn btn-primary">Edit</button>
            <button type="button"
              className="btn btn-outline-danger"
              onClick={() => this.deletePost(selectedPost.id)}>{this.state.readyToDelete ? 'Are you sure?' : 'Delete'}</button>
          </div>

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

function mapStateToProps ({ selectedPost }) {
  return {
    selectedPost,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPost: id => dispatch(fetchPost(id)),
    deletePost: id => dispatch(fetchDeletePost(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
