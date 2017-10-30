import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost, fetchDeletePost, fetchComments, fetchPosts, fetchNewComment } from '../actions'
import PostItem from '../components/PostItem'
import CommentItem from '../components/CommentItem'
import uuidv1 from "uuid/v1"

class Post extends Component {

  state={
    readyToDelete: false,
    body:'',
    author: ''
  }
  componentDidMount(){
    const {requestPost, requestComments, requestPosts} = this.props
    const {post_id} = this.props.match.params
    requestPost(post_id)
    requestComments(post_id)

    //force update posts state
    requestPosts()
  }

  //Handles input fields
  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }


  //Submits comment
  handleSubmit = e => {
    const {newComment} = this.props
    const {selectedPost} =  this.props.selectedPost
    const { body, author } = this.state
    e.preventDefault()
    const data = {
      id: uuidv1(),
      parentId: selectedPost.id,
      timestamp: Date.now(),
      body,
      author,
    }
    this.setState({body:'', author:''})
    //Dispatches action with post
    newComment(data)

  }



  render(){
    const {selectedPost} =  this.props.selectedPost
    const {comments} = this.props.comments
    console.log('post view')
    if(selectedPost){
      return(
        <div >
          <Link to='/' >← Back</Link>
          <PostItem post={selectedPost} />

          {comments &&
            <div style={{marginTop: 30}}>
              {comments.length > 0 && <h3>Comments</h3>}
              {comments.map(c => <CommentItem comment={c} key={c.id} /> )}
            </div>
          }
          <div style={{marginTop: 30}}>
            <hr/>
            <form onSubmit={this.handleSubmit}>
              <h3>New Comment</h3>

              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  value={this.state.author}
                  onChange={this.handleChange}
                  className="form-control" name="author" id="author"
                  placeholder="Author name"/>
              </div>

              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                  className="form-control"
                  id="body" rows="3"
                  onChange={this.handleChange}
                  value={this.state.body}
                  name="body"
                  placeholder="Post body"
                />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
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
    newComment: comment => dispatch(fetchNewComment(comment)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
