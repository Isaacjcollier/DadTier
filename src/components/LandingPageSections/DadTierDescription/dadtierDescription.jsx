import React from 'react'
import styles from './dadtierDescription.module.css'
import hypeChicken from '../../../media/images/hypeChicken.png'

class DadTierDescription extends React.Component {
    render() {

        return (
            <div className={styles.main}>
                <img className={styles.hypeChickenPic} src={hypeChicken} alt="dadtier branding"/>

                <p className={styles.description}>
                Dadtier is a show with three brothers that are family friendly that love to entertain and celebrate their viewers achievements and milestones with the fridge. They have a massive retro and new video game collection that they play from, and are all about encouraging people to do things together.
                </p>
            </div>
        )
    }
}

export default DadTierDescription;