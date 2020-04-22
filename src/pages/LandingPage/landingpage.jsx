import React from 'react'
import styles from './landingpage.module.css'
import DadTierDescription from '../../components/LandingPageSections/DadTierDescription/dadtierDescription'
import WatchDadTier from '../../components/LandingPageSections/WatchDadTier/watchDadTier'

class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.mainContainer}>

                <DadTierDescription />
                <WatchDadTier />
            </div>
        )
    }
}

export default LandingPage