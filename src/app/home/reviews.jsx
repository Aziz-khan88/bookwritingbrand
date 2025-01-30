"use client"
import { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/clientsreviews.module.scss"
import ClientReviews from "./clientreviews"
import BookReviews from "./bookreview"



const Reviews = () => {
    const [activeReview, setActiveReview] = useState("client");
    return (
        <section className={`${styles.clientsReviewsSection} pt-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={8}>
                        <div className="subtitle">Our Reviews</div>
                        <h2>Let’s hear what they have to say!</h2>
                        <p>Lorem ipsum dolor sit amet blandit consectetur. Risus interdum sed turpis nunc nulla neque blandit. Sed donec lorem.</p>
                    </Col>
                    <Col md={12} lg={4} className='my-auto'>
                        <ul className={styles.tabReviews}>
                            <li
                                onClick={() => setActiveReview("client")}
                                className={activeReview === "client" ? styles.active : ""}
                            >
                                Client Reviews
                            </li>
                            <li
                                onClick={() => setActiveReview("book")}
                                className={activeReview === "book" ? styles.active : ""}
                            >
                                Book Reviews
                            </li>
                        </ul>
                    </Col>
                    <Col md={12}>
                        {activeReview === "client" && <ClientReviews />}
                        {activeReview === "book" && <BookReviews />}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Reviews