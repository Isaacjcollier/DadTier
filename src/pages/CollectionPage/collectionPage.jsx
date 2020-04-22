import React from 'react'
import styles from './collectionPage.module.css'
import collectionImg from '../../media/images/collection.jpg'

class CollectionPage extends React.Component {
    render() {
        return (
            <div className={styles.mainContainer}>

                <img className={styles.collectionImage} src={collectionImg} alt=""/>

                <h1 className={styles.collectionText}>More Content Coming soon!</h1>
            </div>
        )
    }
}

export default CollectionPage