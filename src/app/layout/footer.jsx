import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import { FacebookIcon, MainLogo, PinterestIcon, TikTokIcon, TwitterIcon, VimeoIcon, YoutubeIcon } from "@/src/app/app-constants"
import Link from "next/link"
import GetQuote from "@/src/app/home/getquote";


const Footer = () => {
    return (
        <>
            <GetQuote />
            <section className={`${styles.footerSection}`}>
                <Container>
                    <Row>
                        <Col md={12} lg={4} className="ps-lg-0">
                            <div className={styles.socialBox}>
                                <div className={styles.logo}>
                                    <MainLogo />
                                </div>
                                <p>If you’d like to chat about working on a project together, or learn more about working with me, get in touch!</p>
                                <ul className={styles.socialLinks}>
                                    <li><Link href=""><TikTokIcon /></Link></li>
                                    <li><Link href=""><FacebookIcon /></Link></li>
                                    <li><Link href=""><TwitterIcon /></Link></li>
                                    <li><Link href=""><PinterestIcon /></Link></li>
                                    <li><Link href=""><YoutubeIcon /></Link></li>
                                    <li><Link href=""><VimeoIcon /></Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={12} lg={8} className="pe-lg-0">
                            <div className={styles.contactLinks}>
                                <div className={styles.LinksBox}>
                                    <div className={styles.LinksItem}>
                                        <h5>Quick Links</h5>
                                        <ul>
                                            <li><Link href="">Home</Link></li>
                                            <li><Link href="">Pricing</Link></li>
                                            <li><Link href="">Contact</Link></li>
                                            <li><Link href="">Let Get Started</Link></li>
                                        </ul>
                                    </div>
                                    <div className={styles.LinksItem}>
                                        <h5>Our Services</h5>
                                        <ul>
                                            <li><Link href="">Book Writing</Link></li>
                                            <li><Link href="">Book Marketing</Link></li>
                                            <li><Link href="">Book Editing</Link></li>
                                            <li><Link href="">Book Publishing</Link></li>
                                            <li><Link href="">Ebook Writing</Link></li>
                                            <li><Link href="">Book Marketing</Link></li>
                                            <li><Link href="">Digital Marketing</Link></li>
                                            <li><Link href="">Announcement</Link></li>
                                        </ul>
                                    </div>
                                    <div className={styles.LinksItem}>
                                        <h5>Contact Us</h5>
                                        <ul>
                                            <li>Email: <Link href="">infor@bookwriting.com</Link></li>
                                            <li>Toll Free: <Link href="">866-600-0036</Link></li>
                                            <li>For Sale Inquiry: <Link href="">(302) 459-5127</Link></li>
                                            <li>For Project Inquiry: <Link href="">(302) 480-9990</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.copyRightSection}`}>
                <Container className={`${styles.bgGrayColor} h-100`}>
                    <Row className="h-100">
                        <Col md={12} lg={4} className="my-auto">
                            <div className={styles.copyItem}>
                                <h6>Head Office</h6>
                                <p>418 Broadway STE R Albany NY 12207, United States</p>
                            </div>
                        </Col>
                        <Col md={12} lg={4} className="my-auto text-center">
                            <div className={styles.copyItem}>
                                <p>© 2025 - All Rights Reserved Dreamweave Media INC</p>
                            </div>
                        </Col>
                        <Col md={12} lg={4} className="my-auto">
                            <div className={styles.copyItem}>
                                <ul className={styles.copyLinks}>
                                    <li><Link href="">Terms of Use</Link></li>
                                    <li><Link href="">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Footer