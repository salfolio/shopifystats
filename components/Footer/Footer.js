import styles from './Footer.module.css'

function Footer() {

    const footerText = 'Designed & developed by '
    const name = 'Salman Khattak'

    return <div className={styles.container}>
        <p>{footerText} <a href='https://www.salfolio.com/' target="_blank">Salman Khattak</a></p>
    </div>
}

export default Footer;