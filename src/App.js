import {
  Navbar,
  Nav,
  Container,
  Alert,
  Carousel,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert style={{ margin: 0 }} variant="success">
          <Alert.Heading style={{ textAlign: "center" }}>
            Hey , Nice to see you :)
          </Alert.Heading>

          <hr />
        </Alert>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="https://fr.reactjs.org/" target="_blank">
              React
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                href="http://es6-features.org/#Constants"
                target="_blank"
              >
                ES-6
              </Nav.Link>
              <Nav.Link href="https://expressjs.com/fr/" target="_blank">
                Node-js
              </Nav.Link>
              <Nav.Link
                href="https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_footprint_row_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624584&gclid=CjwKCAjwpMOIBhBAEiwAy5M6YLrMey3kyXThz7EOrtgF8KVZugpj0J9ItNKu5yr_JIsz8b41YfYfpxoC5lUQAvD_BwE"
                target="_blank"
              >
                MongoDB
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png"
            alt="First slide"
          />{" "}
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://miro.medium.com/max/1400/1*mT9FVpEB-hAWElqMcE8hIg.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://adrianmejia.com/images/es6-core-features-overview-large.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1>Contact us</h1>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              gender
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Male"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="female"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
