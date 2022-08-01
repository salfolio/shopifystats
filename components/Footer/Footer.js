import styles from './Footer.module.css'

function Footer() {

    const footerText = 'Designed & developed by '
    const name = 'Salman Khattak'

    return <div className={styles.container}>
        <p>{footerText + name}</p>
    </div>
}

export default Footer;