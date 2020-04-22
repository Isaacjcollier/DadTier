import React from 'react'
import styles from './landingpage.module.css'

class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.fridge}>
                <section className={styles.fridgeTopHalf}></section>
                <section className={styles.fridgeBottomHalf}></section>
            </div>
        )
    }
}

export default LandingPage