
import styles from "@/styles/components/uniquebutton.module.scss"

const UniqueButton = ({ center, BgBlack, txt, SimpleBtn }) => {
    return (
        <>
            {SimpleBtn ?
                <div className={`${SimpleBtn ? styles.SimpleBtn : ""}`}>
                    <div className={styles.btnStyle}>{txt}</div>
                </div>
                :
                <div className={`${styles.btnFlex} ${center ? styles.center : ""} ${BgBlack ? styles.bgBlack : ""}`}>
                    <div className={styles.btnStyle}>{txt}</div>
                    <div className={styles.chatStyle}>866-600-0036</div>
                </div>
            }
        </>
    )
}

export default UniqueButton