import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import parImg from "../Image/pexels-artem-beliaikin-1485637.jpg";

const Img3D = () => {
    return (
        <Parallax className="bgImg3d mb-4" bgImage={parImg} strength={200}>
            <Container className="mt-5 mb-4" >
                <Row>
                    <Col md={12}>
                        <h1 className="heading3D text-uppercase" style={{ fontSize: "50px", color: "white", fontWeight: "400" }}>Hey! wait for me, <br/> I'm coming..Lets have a walk!</h1>
                    </Col>
                </Row>
            </Container>
        </Parallax>

    )
}

export default Img3D
