import React from 'react';
import {Route, Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage/landingpage.jsx'
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
          {/* <Route render={() => <PageNotFound}/>}/> */}
        </Switch>
      </div>
      
    )
  };


}

export default App;
