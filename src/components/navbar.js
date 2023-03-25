
import styles from '../styles/navbar.module.css'

function navbar() {
    return (
        <div className={styles.navbar}>
            <h2>CZ</h2>
            <nav className={styles.navbarNav}>
                <ul className={styles.navbarListItems}>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
            </nav>
        </div>
    )
}
export default navbar