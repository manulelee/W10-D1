import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <>
        {this.props.reviews.map((review) => {
          return (
            <SingleComment
              key={review._id}
              author={review.author}
              rate={review.rate}
              comment={review.comment}
              commentId={review._id}
            />
          );
        })}
      </>
    );
  }
}

export default CommentList;
