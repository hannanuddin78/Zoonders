import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

const FAQSaction = () => {
    return (
        <div style={{ backgroundColor: "#e9ecef" }}>
            <Container className="pt-4 pb-4">
                <Row>
                    <Col sm={12} className="headCol">
                        <h1 className="mb-4">FAQs</h1>
                        <h4>Are you real?</h4>
                        <p>Yes, Zoonders is 100% real. We exist to solve a critical need that helps pet lovers and pets build a more beneficial community. Our founders, employees, and vendors are essential members of the pet community in their own ways. We are a pet platform committed to building meaningful relationships for pet owners and their pets.</p>
                        <h4>Do you sell pets?</h4>
                        <p >Not currently, we don’t. We create a safe place where pet owners and lovers can build a community and get vital information to answer all the pet-related questions they have. We will put up an update if our position on these changes.</p>
                        <h4>Is it safe to order on your platform?</h4>
                        <p>Our platform was created to make everything easier for pet owners and their pets. This means extending our service to our clients’ and users' privacy and security.Zoonders will never sell or market your private information to anyone. Our payment platforms are 100% secure. <br />
                        What methods of payment do you accept? <br />
                        We accept all methods of payment, including credit and debit cards and bank transfers.
                        </p>
                        <h4>Can I choose the vet?</h4>
                        <p>Your pet is your buddy, and you are allowed to make the best choices for your loved one. We have a list of certified and experienced veterinarians on the Zoonders platform for you to pick from. All our vets are carefully screened before they are live.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FAQSaction
