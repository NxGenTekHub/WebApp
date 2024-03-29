import React from 'react';
import './App.css';
import './index.css'
import NavigationBar from "./components/NavigationBar/NavigationBar"
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import AboutSection from './components/AboutSection/AboutSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import ChooseUsSection from './components/ChooseUsSection/ChooseUsSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import DownloadSection from './components/DownloadSection/DownloadSection'
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div>
      <NavigationBar/>
      <WelcomeSection/>
      <AboutSection />
      <ServicesSection/>
      <ChooseUsSection />
      <ReviewsSection/>
      <DownloadSection/>
      <Footer/>
    </div>
  )
}

export default App;
