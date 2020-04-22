import React from 'react'
import styles from './tierList64Page.module.css'

class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.mainContainer}>

                <iframe className={styles.spreadsheetContent} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS1ubS8gTq3TiTV3tsKID1YdwycBgRUa9UjqAdRtENMDVzkkLx99_I4mSTQN5y_FIfhrt167XXEbt11/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                
            </div>
        )
    }
}

export default LandingPage