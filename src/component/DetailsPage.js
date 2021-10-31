import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import feed from "../Image/feed-4-1.png"

const dtData = [
    { id: 1, icon: "bi bi-signpost-split", heading: "FIND DOG FRIENDLY PLACES ON THE MAP!", parr: "Search for dog friendly restaurants, stores, hotels, parks, and more. See their pet policies and amenities! Even add to the map yourself if a place is missing!" }, { id: 2, icon: "bi bi-receipt", heading: "ATTEND DOG FRIENDLY EVENTS & HOST YOUR OWN!", parr: "See upcoming dog friendly events and create/host your own group play dates with friends!" }, { id: 3, icon: "bi bi-search", heading: "DISCOVER DOGS NEARBY", parr: "Connect with other dogs nearby to make new friends. Send wags, messages, and more!" }, { id: 4, icon: "bi bi-megaphone", heading: "LOST AND FOUND ALERTS!", parr: "Create lost or found reports and alert other users in that area with your dog’s photo and important information." }, { id: 5, icon: "bi bi-vr", heading: "EXCLUSIVE OFFERS", parr: "Special deals just for BarkHappy users on product for your pup!" }
];

const DetailsPage = () => {
    return (
        <div className="pt-5 pb-5" style={{ backgroundColor: "#e1e1e1" }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <img className="img-fluid" src={feed} alt="" />
                    </Col>
                    <Col md={8}>
                        {dtData.map(dt => (
                            <Row key={dt.id}>
                                <Col md={2}>
                                    <span className="dtIcon">
                                        <i className={dt.icon}></i>
                                    </span>
                                </Col>
                                <Col md={8}>
                                    <h5 className="mb-3">{dt.heading}</h5>
                                    <p>{dt.parr}</p>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailsPage
