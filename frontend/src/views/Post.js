import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost, fetchDeletePost, fetchComments, fetchPosts } from '../actions'
import PostItem from '../components/PostItem'
import CommentItem from '../components/CommentItem'

class Post extends Component {

  state={
    readyToDelete: false
  }
  componentDidMount(){
    const {requestPost, requestComments, posts, requestPosts} = this.props
    const {id} = this.props.match.params
    requestPost(id)
    requestComments(id)

    //force update posts state
    requestPosts()
  }

  deletePost = id => {
    const {history, deletePost} = this.props

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
    console.log('post view')
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
          {comments &&
            <div>
              <h3>Comments</h3>
              {comments.map(c => <CommentItem comment={c} key={c.id} /> )}
            </div>
          }
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

function mapStateToProps ({ posts, selectedPost, comments }) {
  return {
    posts,
    selectedPost,
    comments,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPosts: () => dispatch(fetchPosts()),
    requestPost: id => dispatch(fetchPost(id)),
    deletePost: id => dispatch(fetchDeletePost(id)),
    requestComments: id => dispatch(fetchComments(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
