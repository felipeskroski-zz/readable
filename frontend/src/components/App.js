import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { fetchCategories, fetchPosts } from '../utils/api'
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount(){
    const {requestCategories, requestPosts} = this.props
    requestCategories()
    requestPosts()
  }

  renderPosts(){
    const {posts} = this.props.posts
    console.log('props')
    console.log(this.props)
    if(posts){
      return(

          posts.map((p, index) => (
            <div key={index}>
              <h3>{p.title}</h3>
              <span>{p.author}</span>
              <p>{p.body}</p>
              <p>author: {p.author}</p>
              <p>votes: {p.voteScore}</p>
              <p>comments: {p.commentCount}</p>
            </div>
          ))

      )
    }
  }

  renderCategories(){
    const {categories} = this.props.categories
    console.log('props')
    console.log(this.props)
    if(categories){
      return(
        <ul>
          {categories.map((c, index) => (
            <li key={index}>{c.name}</li>
          ))}
        </ul>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
        {this.renderCategories()}
        {this.renderPosts()}

      </div>
    );
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
    requestCategories: () => dispatch(fetchCategories()),
    requestPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
