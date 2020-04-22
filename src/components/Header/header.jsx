import React from 'react'
import styles from './header.module.css'
import dadtierLogo from '../../media/images/headerLogo.png'
import twitchLogo from '../../media/images/twitchLogo.png'
import discordLogo from '../../media/images/discordLogo.png'
import twitterLogo from '../../media/images/twitterLogo.png'
import instagramLogo from '../../media/images/instagramLogo.png'
import {Link} from 'react-router-dom'


class Header extends React.Component {
    render() {
        return (
            <div className={styles.content}>
                <Link to={"/"}> <img className={styles.dadtierLogo} src={dadtierLogo} alt="DadTier Logo"/> </Link>
                <Link to={"/TierList64"} className={styles.headerButton}>Tier List 64</Link>
                <div className={styles.headerButton}>The Collection</div>
                <div className={styles.headerButton}>About Us</div>

                <div>
                    <a href="https://twitch.tv/dadtier" target="_blank"><img className={styles.socialIcon} src={twitchLogo} alt="twitchIcon"/> </a>
                    <a href="https://twitter.com/dadtier" target="_blank"><img className={styles.socialIcon} src={twitterLogo} alt="twitterIcon"/> </a>
                    <a href="https://discord.gg/KyCKtQz" target="_blank"><img className={styles.socialIcon} src={discordLogo} alt="discordIcon"/> </a>
                    <a href="https://www.instagram.com/dadtier/" target="_blank"><img className={styles.socialIcon} src={instagramLogo} alt="instagramIcon"/> </a>

                </div>

            </div>
        )
    }
}

export default Header