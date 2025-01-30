
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/servicesform.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"
import FromBg from "media/landing/lp1/contactBg.webp"


const ServicesForm = ({ bg, txt }) => {
    return (
        <section className={`${styles.serviceSection}  pt-100`}>
            <Container
                className={`${bg ? styles.bgImg : ""}`}
                style={{ backgroundImage: bg ? `url(${FromBg.src})` : null }}
            >
                <Row className="h-100">
                    <Col md={12} lg={8} className="m-auto text-center">
                        <div className={styles.contentFrom}>
                            <h2>
                                {bg ? (
                                    <>Your Story Deserves To Be Read Let’s <span>Publish Your Best Seller!</span></>
                                ) : (
                                    "Request A Free Quote"
                                )}
                            </h2>
                            <ContactFrom vertical={true} txt={txt} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServicesForm