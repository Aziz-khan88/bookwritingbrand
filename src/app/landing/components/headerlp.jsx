import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/headerlp.module.scss"
import { MainLogo } from "@/src/app/app-constants"

const Headerlp = () => {
    return (
        <section className={styles.headerLp}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={12} className="my-auto">
                        <div className={styles.logoSec}>
                            <MainLogo />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Headerlp