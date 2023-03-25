import styles from '../styles/contact.module.css'

function contact() {
    return (
        <div className={styles.contactPage}>
            <h2>Contact</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type='text' id='name' name='name' />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' />
                <br />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <br />
                <button type='button'>Submit</button>
            </form>
        </div>
    )
}
export default contact