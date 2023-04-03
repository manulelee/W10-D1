import { Component } from "react";
import Button from "react-bootstrap/Button";

class SingleComment extends Component {
  deleteReviews = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.commentId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjdkZmY4MWI0MjAwMTM5YjI3ZGEiLCJpYXQiOjE2ODA1MjcwNTcsImV4cCI6MTY4MTczNjY1N30.GXPO_eeIdOsMiwLuZKvIS_1acx3Owkk3KPD52wjwGr4",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Recensione eliminata con successo");
      } else {
        return new Error("Errore durante l'eliminazione");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        <h6>Author: {this.props.author}</h6>
        <p>
          Rate: {this.props.rate} <br />
          {this.props.comment}
        </p>
        <Button variant="danger" type="button" className="mb-5" onClick={this.deleteReviews}>
          Delete
        </Button>
      </>
    );
  }
}

export default SingleComment;
