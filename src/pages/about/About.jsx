import React from 'react';
import './About.css';
import { Container, Row, Col, Nav, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <h1>Our Facilities</h1>
      <h2>Our gyms are fitted with the latest equipment.</h2>

      <Container id="thirdBlock" style={{marginTop: '40px'}}>
        <Row className="justify-content-center align-items-center">
          <Col>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="#">Free Weights</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Machines</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Swimming Pool</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Running Track</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>

      <Container id="fourthBlock" style={{ height: '400px', width: '100%', paddingTop: '10px' }}>
        <Row className="justify-content-center">
          <Col className="d-flex flex-column align-items-center">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-fitness">Fitness Model</Tooltip>}
            >
              <article className="sBlock0">
                <Image src="https://res.cloudinary.com/dylant25/image/upload/v1558373382/Factory%20Fitness/fitness_model_Andreia_Brazier_dumbbells_gyms_skinny-345690_Fotor.jpg" className="img-fluid img0" alt="Fitness Model" />
              </article>
            </OverlayTrigger>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="#">Fitness Model</Nav.Link>
              </Nav.Item>
            </Nav>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-group-running">Group Running Treadmill</Tooltip>}
            >
              <article className="sBlock0">
                <Image src="https://res.cloudinary.com/dylant25/image/upload/v1558373572/Factory%20Fitness/o-GROUP-RUNNING-TREADMILL-570_Fotor.jpg" className="img-fluid img1" alt="Group Running Treadmill" />
              </article>
            </OverlayTrigger>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="#">Group Running Treadmill</Nav.Link>
              </Nav.Item>
            </Nav>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-swimmers-nutrition">Nutritional Balance for Professional Swimmers</Tooltip>}
            >
              <article className="sBlock0">
                <Image src="https://res.cloudinary.com/dylant25/image/upload/v1558373903/Factory%20Fitness/Nutritional-Balance-for-Professional-Swimmers_Fotor.jpg" className="img-fluid img2" alt="Nutritional Balance for Professional Swimmers" />
              </article>
            </OverlayTrigger>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="#">Nutritional Balance for Professional Swimmers</Nav.Link>
              </Nav.Item>
            </Nav>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-action-athlete">Action Adult Athlete</Tooltip>}
            >
              <article className="sBlock0">
                <Image src="https://res.cloudinary.com/dylant25/image/upload/v1558375660/Factory%20Fitness/action-adult-athlete-936094_Fotor.jpg" className="img-fluid img3" alt="Action Adult Athlete" />
              </article>
            </OverlayTrigger>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="#">Action Adult Athlete</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
