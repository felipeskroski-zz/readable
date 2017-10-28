import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'


class NewPost extends Component {
  createPost = (post) => {}

  handleSubmit = (e) => {
    e.preventDefault()
    const values =  serializeForm(e.target, {hash: true})
  }
  render(){
    return(
      <div>
        <Link to='/'>Close</Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type='text' name="title" placeholder="Title"/>
            <input type='text' name="body" placeholder="Body"/>
            <input type='text' name="author" placeholder="Author"/>
            <button>Add Post</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ categories, posts }) {
  return {
    categories,
    posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    //createPost: () => dispatch(newPost()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost)
