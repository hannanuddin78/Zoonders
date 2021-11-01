import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
//import { Link } from 'react-router-dom';
import blog3Img from "../Image/pexels-ion-ceban-ionelceban-2448981.jpg";
import blog1Img from "../Image/pexels-mali-maeder-75973.jpg";
import blog2Img from "../Image/pexels-tanya-gorelova-3860308.jpg";

const blogData = [
    { id: "1", img: blog1Img, heading: "Adopting your First Dog? Here's what you need to know", date: "Apr 10, 2021" }, { id: "2", img: blog2Img, heading: "Be Prepared: What to do when getting a new dog", date: "Aug 1, 2019" }, { id: "3", img: blog3Img, heading: "Enjoying Halloween With Your Dog", date: "Oct 18, 2018" }
]

const BlogPost = () => {
    return (
        <Container>
            <Row className="mt-5 mb-5">
                <h3 className="text-center mb-5">Blog Posts</h3>
                {blogData.map(blDt => (
                    <Col key={blDt.id} md={4} className="">
                        <Card className="border-0">
                            {/* <Link to={'/' + blDt.heading + '/'}> */}
                                <div className="cardImgBlog">
                                    <Card.Img variant="top" src={blDt.img} />
                                    <i className="bi bi-arrow-right-circle cardIcon d-flex justify-content-center align-items-center"></i>

                                </div>
                            {/* </Link> */}
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
