import RecentPosts from './RecentPosts';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const RecentPostsContainer = connect(mapStateToProps)(RecentPosts);

export default RecentPostsContainer;