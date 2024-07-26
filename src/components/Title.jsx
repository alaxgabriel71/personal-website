import styles from './Title.module.css'

function Title() {
    return(
        <div className={styles.Cape_container}>
            <img src='../../public/alax.jpeg' alt="foto de alax"/>
            <div className={styles.Title_container}>
                <h1>Alax</h1>
                <h2>Gabriel</h2>
            </div>
        </div>
    )
}

export default Title