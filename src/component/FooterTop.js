import React from 'react';
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import topImg from "../Image/a1-01 (1) (1).png";

const FooterTop = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className="ftImg">
                        <img style={{ width: "290px" }} src={topImg} alt="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h4>BarkHappy Inc.</h4>
                    <h4> Austin, TX</h4>
                    <h4>info@barkhappy.com</h4>
                </Col>
                <Col md={12}>
                    <ListGroup horizontal className="mt-4 mb-5">
                        <ListGroup.Item className="border-0 p-0" style={{ marginRight: "20px" }}>
                            <i className="bi bi-facebook fbIc"></i>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0" style={{ marginRight: "20px" }}>
                            <i className="bi bi-twitter icTwIc"></i>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-0">
                            <i className="bi bi-instagram insIc"></i>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterTop
