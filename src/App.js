import React from 'react';
import { BrowserRouter as Router, Switch, Route, HashRouter  } from "react-router-dom";
import './App.css';
import NavbarPrimary from './components/navbar-primary';
import HomePage from './pages/home-page';
import CaseStudyPage from './pages/case-study-page';
import StoryPage from './pages/story-page';
import StoryPageDetail from './pages/story-page-detail';
import PlayGroundPage from './pages/playground-page';
import AboutPage from './pages/about-page';
import CaseStudyPageDetail from './pages/case-study-page-detail';

function App() {  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavbarPrimary/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/case-study" exact component={CaseStudyPage}/>
          <Route path="/case-study/:slug" exact component={CaseStudyPageDetail}/>
          <Route path="/playground" exact component={PlayGroundPage}/>
          <Route path="/story" exact component={StoryPage}/>
          <Route path="/story/:slug" exact component={StoryPageDetail}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
