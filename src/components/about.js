import styles from '../styles/about.module.css'
import Bullet from './bullet'
import Profile from './profile'
import HighlightSkills from './highlightSkills'

function about() {
    return (
        <div className={styles.about}>
            <h2>About</h2>
            <section className={styles.bulletPoints}>
                <Bullet text='text1' />
                <Bullet text='text2' />
                <Bullet text='text3' />
                <Bullet text='text4' />
            </section>
            <section className={styles.profileSkills}>
                <Profile />
                <HighlightSkills />
            </section>
        </div>
    )
}
export default about