import Blog from './Blog';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    newValue: state.posts.newValue
  }
}

const BlogConteiner = connect(mapStateToProps)(Blog);

export default BlogConteiner;