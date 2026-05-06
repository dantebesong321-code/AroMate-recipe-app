import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainNavbar() {
  return (
    <div className="nav-container">
      <div>Logo</div>
      <div className="nav-form-elements">
        <Navbar className="bg-body-tertiary justify-content-right">
          <Form className="search-bar">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Navbar>
      </div>
    </div>
  );
}

export default MainNavbar;
