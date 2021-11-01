import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import blog1Img from "../Image/pexels-mali-maeder-75973.jpg"
import blog2Img from "../Image/pexels-tanya-gorelova-3860308.jpg"
import blog3Img from "../Image/pexels-ion-ceban-ionelceban-2448981.jpg"

const blogData = [
    { id: "1", img: blog1Img , heading: "Adopting your First Dog? Here's what you need to know", date: "Apr 10, 2021" }, { id: "2", img:  blog2Img , heading: "Be Prepared: What to do when getting a new dog", date: "Aug 1, 2019" }, { id: "3", img:  blog3Img, heading: "Enjoying Halloween With Your Dog", date: "Oct 18, 2018" }
]

const BlogPost = () => {
    return (
        <Container>
            <Row className="mt-5 mb-5">
                {blogData.map(blDt => (
                    <Col md={4} className="pr-5">
                        <Card className="border-0">
                            <Card.Img variant="top" src={blDt.img} />
                            <h4 className="mt-3">{blDt.heading}</h4>
                            <p className="mt-3">{blDt.date}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BlogPost
