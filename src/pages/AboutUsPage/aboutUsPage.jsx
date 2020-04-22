import React from 'react'
import styles from './aboutUsPage.module.css'

class AboutUsPage extends React.Component {
    render() {
        return (
            <div className={styles.mainContainer}>
                <h1 className={styles.aboutUsText}>This is who we are.</h1>

                <iframe className={styles.aboutUs} width="560" height="315" src="https://www.youtube.com/embed/pTovW64akUw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default AboutUsPage