import styles from './Widget.module.css'
function ProgressBar(props) {

    
    const progressBarWidth = (props.featureValue * 100);
    


    return <div className={styles.outerProgressBar}>
        <div className={styles.innerProgressBar} style={{width: progressBarWidth, backgroundColor: props.progressBarColor}}>
        </div>
    </div>
}

export default ProgressBar;