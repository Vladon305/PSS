import RecentPosts from './RecentPosts';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const RecentPostsConteiner = connect(mapStateToProps)(RecentPosts);

export default RecentPostsConteiner;