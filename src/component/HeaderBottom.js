import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import app from "../Image/appstore-300x102.png"
import google from "../Image/google-play-300x102.png"

const HeaderBottom = () => {
    return (
        <Container>
            <Row className="mt-4 mb-3">
                <Col md={9}>
                    <h2 className="discover">DISCOVER THE DOG FRIENDLY WORLD AROUND YOU!</h2>
                    <h4 className="Explore-text"> Explore Dog Friendly Places and Events, Connect with Dog Owners Nearby, Even Lost and Found alerts and Deals!</h4>
                </Col>
                <Col md={3}>
                    <h5 className="text-center">Available Now Nationwide! <br /> For Android and IOS 8+</h5>
                    <div className="apps-google">
                        <img className="mb-2" src={app} alt="" />
                        <img src={google} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderBottom
