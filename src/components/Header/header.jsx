import React from 'react'
import styles from './header.module.css'
import dadtierLogo from '../../media/images/DadTierLogo_Updated-01.png'
import twitchLogo from '../../media/images/twitchLogo.png'
import discordLogo from '../../media/images/discordLogo.png'
import twitterLogo from '../../media/images/twitterLogo.png'
import redbubbleLogo from '../../media/images/redbubbleLogo.png'
import instagramLogo from '../../media/images/instagramLogo.png'
import youtubeLogo from '../../media/images/youtubeLogo.png'
import {Link} from 'react-router-dom'


class Header extends React.Component {
    render() {
        return (
            <div className={styles.content}>
                <Link to={"/"}> <img className={styles.dadtierLogo} src={dadtierLogo} alt="DadTier Logo"/> </Link>
                <Link to={"/TierList64"} className={`${styles.headerButton} ${styles.headerFont}`}>Tier List 64</Link>
                <Link to={"/Collection"} className={`${styles.headerButton} ${styles.headerFont}`}>The Collection</Link>
                <Link to={"/AboutUs"} className={`${styles.headerButton} ${styles.headerFont}`}>About Us</Link>

                {/* <div className={styles.socialIconGroup}> */}
                    <a href="https://twitch.tv/dadtier" className={styles.socialIconPositioning} target="_blank"><img className={styles.socialIcon} src={twitchLogo} alt="twitchIcon"/> </a>
                    <a href="https://twitter.com/dadtier" className={styles.socialIconPositioning} target="_blank"><img className={styles.socialIcon} src={twitterLogo} alt="twitterIcon"/> </a>
                    <a href="https://discord.gg/KyCKtQz" className={styles.socialIconPositioning} target="_blank"><img className={styles.socialIcon} src={discordLogo} alt="discordIcon"/> </a>
                    <a href="https://www.instagram.com/dadtier/" className={styles.socialIconPositioning} target="_blank"><img className={styles.socialIcon} src={instagramLogo} alt="instagramIcon"/> </a>
                    <a href="https://www.redbubble.com/people/dadtier/shop" className={styles.socialIconPositioning} target="_blank"><img className={styles.socialIcon} src={redbubbleLogo} alt="redbubbleIcon"/> </a>
                    <a href="https://www.youtube.com/channel/UCegPdaXYiAuFNdkCRXxowjQ?view_as=subscriber" className={styles.socialIconPositioning} target="_blank"><img className={styles.socialIcon} src={youtubeLogo} alt="youtubeIcon"/> </a>
                {/* </div> */}

            </div>
        )
    }
}

export default Header