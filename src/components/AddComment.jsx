import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
    postReviews = async () => {
        try {
          let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
            method: "POST",
            Content-type: "application/json",
            headers: {
                
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjdkZmY4MWI0MjAwMTM5YjI3ZGEiLCJpYXQiOjE2ODA1MjcwNTcsImV4cCI6MTY4MTczNjY1N30.GXPO_eeIdOsMiwLuZKvIS_1acx3Owkk3KPD52wjwGr4",
            },
          });
          if (response.ok) {
            let data = await response.json();
            //console.log(data);
            this.setState({ reviews: data });
          } else {
            return new Error("Errore durante il recupero dei commenti");
          }
        } catch (error) {
          console.log(error);
        }
      };
      
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formRate">
          <Form.Label>Rating (1 to 5)</Form.Label>
          <Form.Control type="number" placeholder="Enter rating" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formReview">
          <Form.Label>Review:</Form.Label>
          <Form.Control type="text" placeholder="Insert comments" />
        </Form.Group>
        <Button variant="success" type="submit" className="mb-5">
          Send review
        </Button>
      </Form>
    );
  }
}

export default AddComment;
