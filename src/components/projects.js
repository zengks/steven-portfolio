import styles from '../styles/projects.module.css'
import OneProject from './oneProject'

function projects() {
    return (
        <>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                <OneProject />
                <OneProject />
                <OneProject />
                <OneProject />
                <OneProject />
                <OneProject />
                <OneProject />
            </div>
        </>

    )
}
export default projects