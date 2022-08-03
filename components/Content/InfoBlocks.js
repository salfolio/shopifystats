import styles from './InfoModal.module.css';

function InfoBlock(props) {
    return <div className={styles.infoBlockContainer}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
}
export default InfoBlock;