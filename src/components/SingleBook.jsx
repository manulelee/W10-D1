import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  isSelected = (e) => {
    this.setState({ selected: !this.state.selected });
    console.log(e.target);
  };

  render() {
    let cardClass = this.state.selected ? "selectedElement" : "";
    return (
      <Col xs={6} md={4} lg={3}>
        <Card className={cardClass} onClick={this.isSelected}>
          <Card.Img variant="top" src={this.props.myBook.img} />
          <Card.Body>
            <Card.Title>{this.props.myBook.title}</Card.Title>
            <Card.Text>
              Category: {this.props.myBook.category} <br />
              Price: {this.props.myBook.price} €
              <br />
              Asin: {this.props.myBook.asin}
              <br />
            </Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
