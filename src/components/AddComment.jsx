import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    review: {
      rate: "",
      comment: "",
      elementId: this.props.asin,
    },
  };
  postReviews = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(this.state.review),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjdkZmY4MWI0MjAwMTM5YjI3ZGEiLCJpYXQiOjE2ODA1MjcwNTcsImV4cCI6MTY4MTczNjY1N30.GXPO_eeIdOsMiwLuZKvIS_1acx3Owkk3KPD52wjwGr4",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Recensione inserita con successo");
        this.setState({
          review: {
            rate: "",
            comment: "",
          },
        });
      } else {
        return new Error("Errore durante l'invio");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form onSubmit={((e) => e.preventDefault(), this.postReview)}>
        <Form.Group className="mb-3" controlId="formRate">
          <Form.Label>Rating (1 to 5)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter rating"
            value={this.state.review.rate}
            onChange={(e) => {
              this.setState({
                review: {
                  ...this.state.review,
                  rate: e.target.value,
                },
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formReview">
          <Form.Label>Review:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert comments"
            value={this.state.review.comment}
            onChange={(e) => {
              this.setState({
                review: {
                  ...this.state.review,
                  comment: e.target.value,
                },
              });
            }}
          />
        </Form.Group>
        <Button variant="success" type="button" className="mb-5" onClick={this.postReviews}>
          Send review
        </Button>
      </Form>
    );
  }
}

export default AddComment;
