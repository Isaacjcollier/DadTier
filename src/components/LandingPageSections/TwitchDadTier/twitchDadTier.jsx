import React from 'react'
import styles from './twitchDadTier.module.css'
import ReactPlayer from "react-player"
import twitchAffiliate from '../../../media/images/twitchAffiliate.jpg'

class TwitchDadTier extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.twitchDadTierText}>
                    <h1>Watch us Live on Twitch</h1>
                    <h2>Every Sunday at 6PM (MST)</h2>
                    <a href="https://twitch.tv/dadtier" target="_blank">
                        <img className={styles.twitchButton} src={twitchAffiliate} alt=""/>
                    </a>
                    
                </div>

                <div className={styles.twitchVideoLink}>

                <ReactPlayer
                    className={styles.embeddTwitchPlayer}
                    url="https://www.twitch.tv/dadtier"
                    style={{margin: "auto"}}
                    controls
                />
                    
                </div>
                
            </div>
        )
    }
}

export default TwitchDadTier