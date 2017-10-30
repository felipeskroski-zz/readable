import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost, fetchUpdatePost } from "../actions";

class EditPost extends Component {
  state = {
    title: "",
    body: "",
    loaded: false
  }
  componentDidMount(){
    const {requestPost} = this.props
    const {id} = this.props.match.params
    requestPost(id)
  }

  componentDidUpdate(prevProps){
    const {selectedPost} =  this.props.selectedPost
    if(selectedPost && prevProps !== this.props && !this.state.loaded){
      this.setState({loaded:true, title:selectedPost.title, body:selectedPost.body})
    }
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


  //Submits post
  handleSubmit = e => {
    const {updatePost, history} = this.props
    const {selectedPost} =  this.props.selectedPost
    const {title, body } = this.state
    e.preventDefault();
    const data = {
      title,
      body,
    };
    //Dispatches action with post
    updatePost(selectedPost.id, data)

    //Redirects to Home after adding post.
    history.push("/")
  }

  render(){
    const {selectedPost} =  this.props.selectedPost
    if(selectedPost){
      return(
        <div>
          <Link to='/'>← Back</Link>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                value={this.state.title}
                onChange={this.handleChange}
                className="form-control" name="title" id="title"
                placeholder="Post title"/>
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
    updatePost: (id, data) => dispatch(fetchUpdatePost(id, data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost)
