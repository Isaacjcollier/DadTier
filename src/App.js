import React from 'react';
import {Route, Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage/landingPage.jsx'
import TierList64Page from './pages/TierList64Page/tierlist64Page'
import CollectionPage from './pages/CollectionPage/collectionPage'
import AboutUsPage from './pages/AboutUsPage/aboutUsPage'
import Header from './components/Header/header.jsx'
import './App.css';

class App extends React.Component {

  render() {

    
    return ( 
      <div>
        <Header/>
        <div className="padders" />
        
        <Switch>
          <Route exact path='/' render={(props) => <LandingPage {...props} />}/>
          <Route exact path='/TierList64' render={(props) => <TierList64Page {...props} />}/>
          <Route exact path='/Collection' render={(props) => <CollectionPage {...props} />}/>
          <Route exact path='/AboutUs' render={(props) => <AboutUsPage {...props} />}/>
          {/* <Route render={() => <PageNotFound}/>}/> */}
        </Switch>
      </div>
      
    )
  };


}

export default App;
