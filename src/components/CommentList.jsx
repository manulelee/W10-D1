import { Component } from "react";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";

class CommentList extends Component {
  render() {
    return (
      <>
        {this.props.reviews.map((review) => {
          return <SingleComment key={review._id} author={review.author} rate={review.rate} comment={review.comment} />;
        })}
        <AddComment />
      </>
    );
  }
}

export default CommentList;
