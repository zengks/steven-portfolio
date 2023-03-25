import profileImage from '../assets/images/profile.jpg'
import words from '../words'

import styles from '../styles/profile.module.css'

function profile() {
    return (
        <div className={styles.profile}>
            <img className={styles.profileImage} src={profileImage} alt="Profile of CZ" />
            <article>{words.selfIntro}</article>
        </div>
    )
}
export default profile