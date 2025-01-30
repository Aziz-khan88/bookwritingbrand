
import { Col, Container, Form, Row } from "react-bootstrap"
import styles from "@/styles/contact/contactus.module.scss"
import CtaContact from "@/src/app/contact-us/ctacontact";


export default function Page() {
    return (
        <>
            <section className={`${styles.contactSection} pt-100`}>
                <Container>
                    <Row>
                        <Col md={10} lg={8} className="m-auto">
                            <h1>Elevate your book. Get published.</h1>
                            <Form>
                                <div className={styles.contactpageFrom}>
                                    <div className={styles.contactItem}>
                                        <label>Full Name</label>
                                        <input type="text" required />
                                    </div>
                                    <div className={styles.contactItem}>
                                        <label>Email</label>
                                        <input type="email" required />
                                    </div>
                                    <div className={styles.contactItem}>
                                        <label>Phone</label>
                                        <input type="tel" required />
                                    </div>
                                    <div className={styles.contactItem}>
                                        <label>Message</label>
                                        <textarea name=""></textarea>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <label>Are you a?</label>
                                        <div className={styles.radioBtn}>
                                            <label>
                                                <input type="radio" name="name" />Author
                                            </label>
                                            <label>
                                                <input type="radio" name="name" />Publisher
                                            </label>
                                            <label>
                                                <input type="radio" name="name" />Other
                                            </label>
                                        </div>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <div className={styles.tit}>Services</div>
                                        <div className={styles.checkContainer}>
                                            <div className={styles.checkBox}>
                                                <input type="checkbox" id="one" />
                                                <label htmlFor="one">Editing - I want to hire a professional to write or rewrite my book</label>
                                            </div>
                                            <div className={styles.checkBox}>
                                                <input type="checkbox" id="two" />
                                                <label htmlFor="two">Editing - I want to hire a professional to write or rewrite my book</label>
                                            </div>
                                            <div className={styles.checkBox}>
                                                <input type="checkbox" id="three" />
                                                <label htmlFor="three">Editing - I want to hire a professional to write or rewrite my book</label>
                                            </div>
                                            <div className={styles.checkBox}>
                                                <input type="checkbox" id="four" />
                                                <label htmlFor="four">Editing - I want to hire a professional to write or rewrite my book</label>
                                            </div>
                                            <div className={styles.checkBox}>
                                                <input type="checkbox" id="five" />
                                                <label htmlFor="five">Editing - I want to hire a professional to write or rewrite my book</label>
                                            </div>
                                            <div className={styles.checkBox}>
                                                <input type="checkbox" id="six" />
                                                <label htmlFor="six">Editing - I want to hire a professional to write or rewrite my book</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.paraContent}>
                                        <p>You may find our confidentiality policy here , or <span>request a signed NDA by email: info@bookwriting.us</span>. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service Terms of Service apply.</p>
                                    </div>
                                    <div className={styles.contactBtn}>
                                        <input type="submit" name="submit" value="Submit" />
                                    </div>
                                </div>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </section>
            <CtaContact />
        </>
    );
}
