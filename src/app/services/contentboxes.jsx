import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/services/contentboxes.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"


const ContentBoxes = ({ data }) => {
    return (
        <section className={`${styles.contentBoxes}`}>
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col md={6} key={index}>
                            <div className={styles.contentContainer}>
                                <h5>{item.title}</h5>
                                <p>{item.txt}</p>
                                <UniqueButton txt="Talk to a Specialist" BgBlack={true} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default ContentBoxes