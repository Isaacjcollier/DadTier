import React from 'react'
import styles from './dadtierDescription.module.css'
import dadtierBrand from '../../../media/images/dadtierBrand.png'

class DadTierDescription extends React.Component {
    render() {

        return (
            <div className={styles.main}>
                <img className={styles.dadtierPicture} src={dadtierBrand} alt="dadtier branding"/>

                <h4 className={styles.description}>
                Dadtier is a show with two brothers that are family friendly that love to entertain and celebrate their viewers achievements and milestones with the fridge. They have a massive retro and new video game collection that they play from, and are all about encouraging people to do things together.
                </h4>
            </div>
        )
    }
}

export default DadTierDescription;