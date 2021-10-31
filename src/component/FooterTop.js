import React from 'react';
import { Col, Container, Nav, Row } from "react-bootstrap";
import topImg from "../Image/a1-01 (1) (1).png";
import fb from "../Image/facebook.png";
import tw from "../Image/124021.png";
import ins from "../Image/instagram-154683470.jpg";

const FooterTop = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <img style={{ width: "290px" }} src={topImg} alt="" />
                </Col>
                <Col md={12}>
                    <h4>BarkHappy Inc.</h4>
                    <h4> Austin, TX</h4>
                    <h4>info@barkhappy.com</h4>
                </Col>
                <Col md={12}>
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/home">
                                <img style={{ width: "34px",height:"34px" }} src={fb} alt="" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1">
                                <img style={{ width: "34px", height: "34px" }} src={tw} alt="" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">
                                <img style={{ width: "34px", height: "34px" }} src={ins} alt="" />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterTop
