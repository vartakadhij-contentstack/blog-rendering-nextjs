import styles from '../styles/Navigation.module.css';
import Link from 'next/link';
import Image from 'next/image'

const Navigation = (props) =>{
    return(
        <nav className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
                <Image
                    src="/logo.png"
                    alt={`Company Logo`}
                    width = "100"
                    height = "100"
                    className={styles["company-logo"]}
                >
                </Image>
            </div>
            <div className={styles["nav-links"]}>
                <Link href={`/`}>
                    <a>
                        <p className={styles["nav-link-home"]}>Home</p>
                    </a>
                </Link>
                <Link href={`/`}>
                    <a>
                        <p className={styles["nav-link-about-us"]}>About Us</p>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation;