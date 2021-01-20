import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = (props) =>{
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["footer-details"]}>
                <div className={styles["privacy-and-terms"]}>
                    <Link href={`/`}>
                        <a>
                            <p className={styles["privacy-link"]}>Privacy</p>
                        </a>
                    </Link>
                    <Link href={`/`}>
                        <a>
                            <p className={styles["terms-link"]}>Terms</p>
                        </a>
                    </Link>
                </div>
                <div className={styles["copyright-text"]}>
                    <p>Copyright © 2021 Adhij Vartak. All Rights Reserved.</p>
                </div> 
            </div>
            <div className={styles["social-media-links"]}>
                <div className={styles["section-heading"]}>
                    <p>Social Media Links:</p>
                </div>
                <div className={styles["links"]}>
                    <Link href={`https://github.com/`}>
                        <a>
                            <p>GitHub</p>
                        </a>
                    </Link>
                    <Link href={`https://www.linkedin.com/login`}>
                        <a>
                            <p>LinkedIn</p>
                        </a>
                    </Link>
                    <Link href={`https://twitter.com/`}>
                        <a>
                            <p>Twitter</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;