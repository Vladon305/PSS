import RecentPosts from './RecentPosts'
import { connect } from "react-redux"
import { AppStateType } from '../../Redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(RecentPosts)