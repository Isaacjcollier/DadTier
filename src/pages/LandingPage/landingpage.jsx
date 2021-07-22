import React from 'react'
import styles from './landingpage.module.css'
import DadTierDescription from '../../components/LandingPageSections/DadTierDescription/dadtierDescription'
import TwitchDadTier from '../../components/LandingPageSections/TwitchDadTier/twitchDadTier'
import YoutubeDadTier from '../../components/LandingPageSections/YoutubeDadTier/youtubeDadTier'
import Carousel from '../../components/carousel/carousel'

class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.mainContainer}>
                <Carousel />

                
                <DadTierDescription />
                <TwitchDadTier />
                <YoutubeDadTier />
                
            </div>
        )
    }
}

export default LandingPage