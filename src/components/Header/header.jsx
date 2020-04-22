import React from 'react'
import styles from './header.module.css'
import dadtierLogo from '../../media/headerLogo.png'
import twitchLogo from '../../media/twitchLogo.png'
import discordLogo from '../../media/discordLogo.png'
import twitterLogo from '../../media/twitterLogo.png'
import instagramLogo from '../../media/instagramLogo.png'


class Header extends React.Component {
    render() {
        return (
            <div className={styles.content}>
                <img className={styles.dadtierLogo} src={dadtierLogo} alt="DadTier Logo"/>
                <div className={styles.headerButton}>In 64: progress</div>
                <div className={styles.headerButton}>The Collection</div>
                <div className={styles.headerButton}>About Us</div>

                <div>
                    <a href="https://twitch.tv/dadtier"><img className={styles.socialIcon} src={twitchLogo}/> </a>
                    <a href="https://twitter.com/dadtier"><img className={styles.socialIcon} src={twitterLogo}/> </a>
                    <a href="https://discord.gg/KyCKtQz"><img className={styles.socialIcon} src={discordLogo}/> </a>
                    <a href="https://www.instagram.com/dadtier/"><img className={styles.socialIcon} src={instagramLogo}/> </a>

                </div>

            </div>
        )
    }
}

export default Header