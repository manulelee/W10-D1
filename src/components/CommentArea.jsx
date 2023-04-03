import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    reviews: [],
  };

  getReviews = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
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

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return (
      <>
        {" "}
        <div className="comments">
          <h5>Recensioni ({this.state.reviews.length}):</h5>
          <CommentList reviews={this.state.reviews} />
        </div>
      </>
    );
  }
}

export default CommentArea;
