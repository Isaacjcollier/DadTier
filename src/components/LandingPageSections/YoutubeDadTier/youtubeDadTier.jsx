import React from 'react'
import styles from './youtubeDadTier.module.css'
import youtubeButton from '../../../media/images/youtubeButton.jpg'
import dadTierDanceGif from '../../../media/gifs/dance.gif'
import tv from '../../../media/images/tv.png'

class YoutubeDadTier extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.contentText}>
                    <h1 className={styles.header}>Want more DadTier Family Friendly Fun?</h1>
                    <h2 className={styles.subHeader}>Watch clips, reviews, highlights and more on our Youtube Channel</h2>
                    <img className={styles.youtubeButton} src={youtubeButton} alt=""/>
                </div>
                

                <div className={styles.tvSection}>
                    <img className={styles.tv} src={tv} alt=""/>
                    <img className={styles.dadTierDance} src={dadTierDanceGif} alt=""/>
                </div>
            </div>
        )
    }
}

export default YoutubeDadTier