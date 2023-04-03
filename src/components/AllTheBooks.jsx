import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import fantasyBooks from "../data/fantasy.json";
import historyBooks from "../data/history.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";
import Card from "react-bootstrap/Card";

let allCategoryBooks = fantasyBooks.concat(historyBooks.concat(horrorBooks.concat(romanceBooks.concat(scifiBooks))));
console.log(allCategoryBooks);

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          {scifiBooks.map((book, i) => {
            return (
              <Col xs={6} md={4} lg={3} key={book.asin + i}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Category: {book.category} <br />
                      Price: {book.price} €
                      <br />
                      Asin: {book.asin}
                      <br />
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
