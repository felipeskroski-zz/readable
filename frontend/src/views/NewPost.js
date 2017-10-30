import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNewPost } from "../actions"
import uuidv1 from "uuid/v1"

const categories = [
  { key: 1, text: "React", value: "react" },
  { key: 2, text: "Redux", value: "redux" },
  { key: 3, text: "Udacity", value: "udacity" }
];


class NewPost extends Component {
  state = {
    category: "react",
    title: "",
    author: "",
    body: ""
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

  //Handles category change
  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value })
  }

  //Submits post
  handleSubmit = e => {
    const {createPost, history} = this.props
    const {title, body, author, category} = this.state
    e.preventDefault()
    const data = {
      id: uuidv1(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
    }
    //Dispatches action with post
    createPost(data)

    //Redirects to Home after adding post.
    history.push("/")
  }

  render(){
    return(
      <div>
        <Link to='/'>Close</Link>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Category</label>
            <select
              className="form-control" id="exampleFormControlSelect2"
              value={this.state.category} onChange={this.handleCategoryChange}
            >
              {categories.map(c =>(
                <option key={c.key} value={c.value}>{c.text}</option>
              ))
              }
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              value={this.state.title}
              onChange={this.handleChange}
              className="form-control" name="title" id="title"
              placeholder="Post title"/>
          </div>

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
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(fetchNewPost(post))
})

export default connect(
  null,
  mapDispatchToProps
)(NewPost)
