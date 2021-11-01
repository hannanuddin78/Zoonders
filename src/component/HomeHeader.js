import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import logo from "../Image/1.1.jpg"
// import imgOne from "../Image/barkhappy_app_profile.png"
// import imgTwo from "../Image/barkhappy_app_4-1.png"

const HomeHeader = () => {
    return (
        <div className="bgImgHeader pb-5">
            <Container>
                <Row>
                    <Col md={12}>
                        {/* <img src={logo} alt="" style={{width:"200px", height:"125px", marginTop:'30px',}} /> */}
                    </Col>
                </Row>
                <Row>
                    <Col md={7} className="text-uppercase txt mt-3">
                        {/* <h1>Meet new friends.</h1>
                        <h1>Go more places.</h1>
                        <h1>Be Happy.</h1> */}
                    </Col>
                    <Col md={5} className="mt-3">
                        <div className="mbImg mt-5">
                            {/* <img className="img1" src={imgOne} alt="" />
                            <img className="img2" src={imgTwo} alt="" /> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeHeader
