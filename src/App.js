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
import { createBrowserHistory } from 'history'

function App() {  
  const history = createBrowserHistory();

  const saveHistory = param => {
    history.push(param)
  }

  return (
    <Router history={history}>
      <div className="App">
        <NavbarPrimary/>
        <Switch>
          <Route path="/" onClick={saveHistory("/")} exact component={HomePage}/>
          <Route path="/case-study" onClick={saveHistory("/case-study")} exact component={CaseStudyPage}/>
          <Route path="/case-study/:slug" onClick={saveHistory("/case-study/:slug")} exact component={CaseStudyPageDetail}/>
          <Route path="/playground" onClick={saveHistory("/playground")} exact component={PlayGroundPage}/>
          <Route path="/story" onClick={saveHistory("/story")} exact component={StoryPage}/>
          <Route path="/story/:slug" onClick={saveHistory("/story/:slug")} exact component={StoryPageDetail}/>
          <Route path="/about" onClick={saveHistory("/about")} component={AboutPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
