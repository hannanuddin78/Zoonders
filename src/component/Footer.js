import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#333333", color:"#eeeeee"}}>
            <Container>
                <Row className="pt-3 pb-3">
                    <Col md={12}>
                        <p className="mb-0">© 2021 ZoonDers Inc. | Privacy Policy - Terms & Conditions -</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
