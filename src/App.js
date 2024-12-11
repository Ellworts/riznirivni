// #region imports
import React from 'react';
import CustomCursor from "./cursor/custom-cursor";
import TopBar from "./topbar/topbar";
import Main from './sections/intro/main';
import Projects from './sections/projects/projects';
import Background from './background/background';
import AboutUs from './sections/about-us/about-us';
import Merch from './sections/merch/merch';
import Questions from './sections/questions/questions';
import Partners from './sections/partners/partners';
import Footer from './sections/footer/footer';
// #endregion

function App() {
  return (
    <>
      <div class="mobile-message">
        This website currently does not have a mobile version..
      </div>
      <div class="content">
        <CustomCursor />
        <TopBar />
        <Main />
        <Projects />
        <AboutUs />
        <Merch />
        <Questions />
        <Background />
        <Partners />
        <Footer />
      </div>
    </>
  );
}

export default App;
