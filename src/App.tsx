import React, { useState } from 'react';
import { CategoryContext } from './contexts/useCategoryContext';
import Header from './sections/Header';
import FirstScreen from './sections/FirstScreen';
import TopSales from './sections/TopSales';
import SaleBanner from './sections/SaleBanner';
import AboutNewsman from './sections/AboutNewsman';
import AboutPaperboySec from './sections/AboutPaperboy';
import MainVideo from './sections/MainVideo';
import FindOutMore from './sections/FindOutMore';
import SubscribeToUs from './sections/SubscribeToUs';
import VideoGallery from './sections/VideoGallery';
import Articles from './sections/Articles';
import JoinClub from './sections/JoinClub';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer/Footer';
import Rewiews from './sections/Rewiews';

const App: React.FC = () => {
  const [category, setCategory] = useState('sweaters');
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      <div className="App">
        <Header />
        <FirstScreen />
        <TopSales />
        <SaleBanner />
        <AboutNewsman />
        <AboutPaperboySec />
        <MainVideo />
        <FindOutMore />
        <SubscribeToUs />
        <Rewiews />
        <VideoGallery />
        <Articles />
        <JoinClub />
        <ContactUs />
        <Footer />
      </div>
    </CategoryContext.Provider>
  );
};
export default App;
