import styles from '../styles/bullet.module.css'

function bullet({ text }) {
    return (
        <div className={styles.bullet}>
            <p>Circle</p>
            <p>My description {text} </p>
        </div>
    )
}
export default bullet