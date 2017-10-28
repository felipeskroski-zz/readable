import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { fetchCategories, fetchPosts } from '../utils/api'
import { connect } from 'react-redux'
import Post from '../components/Post'


class Home extends Component {
  constructor() {
    super();
    // bind once here, better than multiple times in render
    this.handleChange = this.handleChange.bind(this);
    this.state = { orderBy: ''};
  }

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
      const ordered = this.sortPosts(posts, this.state.orderBy)
      return(
          ordered.map((p, index) => (
            <Post key={index} post={p}/>
          ))
      )
    }
  }
  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  sortPosts(posts, orderBy){
    return posts.sort(function (a, b) {
      return a[orderBy] - b[orderBy];
    });
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
        <select name="orderBy" id="" value={this.state.orderBy} onChange={this.handleChange}>
          <option value="voteScore">Votes</option>
          <option value="timestamp">Date</option>
        </select>

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
)(Home)
