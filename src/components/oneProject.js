import styles from '../styles/project.module.css'
import image from '../assets/images/profile.jpg'

function oneProject() {
    return (
        <div className={styles.oneProject}>
            <img src={image} alt="Project Graph" />
            <article>Project description</article>
        </div>
    )
}
export default oneProject