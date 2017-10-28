import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost } from '../utils/api'
import PostItem from '../components/PostItem'

class Post extends Component {
  componentDidMount(){
    const {requestPost} = this.props
    const {id} = this.props.match.params
    requestPost(id)
  }
  render(){
    const {selectedPost} =  this.props.posts
    if(selectedPost){
      return(
        <div>
          <Link to='/'>Back</Link>
          <PostItem post={selectedPost} />
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

function mapStateToProps ({ posts }) {
  return {
    posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPost: (id) => dispatch(fetchPost(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
