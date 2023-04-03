import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import JumbotronComponent from "./components/JumbotronComponent";
import MyFooter from "./components/MyFooter";
//import AllTheBooks from "./components/AllTheBooks";

import BookList from "./components/BookList";
//import SingleBook from "./components/SingleBook";

import fantasyBooks from "./data/fantasy.json";
import historyBooks from "./data/history.json";
import horrorBooks from "./data/horror.json";
import romanceBooks from "./data/romance.json";
import scifiBooks from "./data/scifi.json";
let allCategoryBooks = fantasyBooks.concat(historyBooks.concat(horrorBooks.concat(romanceBooks.concat(scifiBooks))));

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <JumbotronComponent></JumbotronComponent>
      <BookList booksArray={allCategoryBooks}></BookList>

      {/*<SingleBook myBook={fantasyBooks[0]}></SingleBook>*/}
      {/*<AllTheBooks></AllTheBooks>*/}
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
