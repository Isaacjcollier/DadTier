import React from 'react'
import styles from './watchDadTier.module.css'
import dadTierDanceGif from '../../../media/gifs/dance.gif'
import tv from '../../../media/images/tv.png'
import twitchAffiliate from '../../../media/images/twitchAffiliate.jpg'

class WatchDadTier extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.watchDadTierText}>
                    <h1>Watch us Live on Twitch</h1>
                    <h2>Every Sunday at 6PM (MST)</h2>
                    <img className={styles.twitchButton} src={twitchAffiliate} alt=""/>
                </div>

                <div className={styles.twitchVideoLink}>
                    <img className={styles.tv} src={tv} alt=""/>
                    <img className={styles.dadTierDance} src={dadTierDanceGif} alt=""/>
                </div>
                
            </div>
        )
    }
}

export default WatchDadTier