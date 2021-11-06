import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import app from "../Image/appstore-300x102.png"
// import google from "../Image/google-play-300x102.png"

const HeaderBottom = () => {
    return (
        <Container>
            <Row className="mt-3 mb-3">
                <Col md={12}>
                    <h2 className="discover">The Future Starts Today</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderBottom
