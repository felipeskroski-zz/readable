import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { fetchCategories, fetchPosts } from '../actions'
import { connect } from 'react-redux'
import PostItem from '../components/PostItem'
import Nav from '../components/Nav'


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
    const {category} = this.props.match.params
    console.log('props')
    console.log(this.props)

    if(posts){
      let ordered = this.sortPosts(posts, this.state.orderBy)
      if(category){
        ordered = ordered.filter(p => p.category == category)
      }
      return(
          ordered.map((p, index) => (
            <PostItem key={index} post={p} />
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
        <ul className="list-group">
          <li className="list-group-item"><strong>Categories</strong></li>
          {categories.map((c, index) => (
            <li className="list-group-item" key={index}><Link to={`/${c.path}`}>{c.name}</Link></li>
          ))}
        </ul>
      )
    }
  }

  render() {
    const {category} = this.props.match.params
    return (




          <div className='d-flex flex-row justify-content-between'>
            <div className='w-75' style={{paddingRight: 30}}>
              <div className='form-inline'>
                <div className="form-group">
                  <label htmlFor="orderBy">Order by</label>
                  <select className="form-control" name="orderBy" id="" value={this.state.orderBy} onChange={this.handleChange}>
                    <option value="voteScore">Votes</option>
                    <option value="timestamp">Date</option>
                  </select>
                </div>
              </div>
              <hr/>
              {this.renderPosts()}
            </div>
            <div className='w-25'>
              {this.renderCategories()}
            </div>
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
    requestCategories: () => dispatch(fetchCategories()),
    requestPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
