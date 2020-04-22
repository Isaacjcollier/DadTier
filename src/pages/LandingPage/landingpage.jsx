import React from 'react'
import styles from './landingPage.module.css'
import DadTierDescription from '../../components/LandingPageSections/DadTierDescription/dadtierDescription'
import TwitchDadTier from '../../components/LandingPageSections/TwitchDadTier/twitchDadTier'
import YoutubeDadTier from '../../components/LandingPageSections/YoutubeDadTier/youtubeDadTier'

class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.mainContainer}>

                <DadTierDescription />
                <TwitchDadTier />
                <YoutubeDadTier />
                
            </div>
        )
    }
}

export default LandingPage