//import Container from "react-bootstrap/Container";
let today = new Date();

function MyFooter() {
  return (
    //<Container className="">
    <div className="pt-3 px-5 bg-danger text-white rounded footer mt-4 w-100">
      <ul className="d-flex justify-content-between">
        <li>Contatti</li>
        <li>About us</li>
        <li>Spedizioni</li>
      </ul>
      <p className="text-center">{today.getFullYear()} - Mondadori</p>
    </div>
    // </Container>
  );
}

export default MyFooter;
