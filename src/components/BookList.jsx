import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class BookList extends Component {
  state = {
    query: "",
    books: this.props.booksArray,
  };

  filterBookList = () => {
    return this.props.booksArray.filter((books) => books.title.toLowerCase().includes(this.state.query.toLowerCase()));
  };

  render() {
    return (
      <Container>
        <Row>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              this.setState({
                books: this.filterBookList(),
              });
            }}
          >
            <InputGroup className="my-3 mt-5">
              <Form.Control
                placeholder="Insert your query"
                aria-label="Insert your query"
                aria-describedby="basic-addon2"
                value={this.state.query}
                onChange={(e) => {
                  this.setState({ query: e.target.value });
                }}
              />
              <Button variant="outline-secondary" type="submit">
                🔍
              </Button>
            </InputGroup>
          </Form>
        </Row>

        <Row>
          {this.state.books.map((book, i) => {
            return <SingleBook key={book.asin + i} myBook={book}></SingleBook>;
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
