import { Component } from "react";

class SingleComment extends Component {
  render() {
    return (
      <>
        <h6>Author: {this.props.author}</h6>
        <p>
          Rate: {this.props.rate} <br />
          {this.props.comment}
        </p>
      </>
    );
  }
}

export default SingleComment;
