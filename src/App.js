import { useEffect, useState } from 'react';
import './App.scss';
import mobilePanelOne from './assets/mobilePanel_1.svg';
import mobilePanelTwo from './assets/mobilePanel_2.svg';
import mobilePanelThree from './assets/mobilePanel_3.svg';
import mobilePanelFour from './assets/mobilePanel_4.svg';
import panelOne from './assets/panel_1.svg';
import panelTwo from './assets/panel_2.svg';
import panelThree from './assets/panel_3.svg';
import panelFour from './assets/panel_4.svg';
import letsNFT from './assets/letsNFT.svg';
import line from './assets/line.svg';
import centerLine from './assets/centerLine.svg';
import nobuComic from './assets/nobuComic.svg';
import catGroup from './assets/catGroup.svg';
import catGroupMobile from './assets/catGroupMobile.svg';
import facebook from './assets/facebook.svg';
import twitter from './assets/Twitterr.svg';
import instagram from './assets/instagram.svg';
import logo from './assets/dotStory-footer.svg';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ImageComponent } from './components/ImageComponent';
import { useDimensions } from './hooks/useDimensions';
import { Loading } from './pages/Loading';
import { useRef } from 'react';

let timerId;

function App() {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const [loadingValue, setLoadingValue] = useState(0);
  const newsletterRef = useRef();
  const { width } = useDimensions();

  const isMobileView = width <= 1000;

  useEffect(() => {
    if (isLoadingScreen) {
      if (loadingValue === 100) {
        clearInterval(timerId);
        setIsLoadingScreen(false);
        return;
      }

      timerId = setInterval(() => {
        setLoadingValue(prev => prev + 25);
        return;
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isLoadingScreen, loadingValue]);

  const scrollToBottom = () => {
    newsletterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoadingScreen) {
    return <Loading loadingValue={loadingValue} />;
  }

  return (
    <div className="app">
      <Header />
      <section className="one">
        <div className="app__content">
          <div className="app__content__description">
            <h3>Come experience</h3>
            <p>The new way of Storytelling</p>
          </div>
          <button onClick={scrollToBottom}>Coming Soon</button>
        </div>
      </section>
      <section className="two">
        <div className="app__content">
          <div className="app__content__description">
            <img id="line" src={line} alt="dotStory" />
            <h3>
              Let's <br />
              make Nfts{' '}
            </h3>
            <h5>Fun again</h5>
            <p>
              Start your new adventure with DotStory and experience the NFT
              ecosystem in a new light.
            </p>
          </div>
          <div>
            <img src={letsNFT} alt="Let's make Nfts" />
          </div>
        </div>
      </section>
      <section className="three">
        <div className="app__content">
          <div>
            <img src={nobuComic} alt="Let's Tell stories" />
          </div>
          <div className="app__content__description">
            <img id="line" src={line} alt="dotStory" />
            <h3>
              Let's <br /> Tell stories
            </h3>
            <p>
              DotStory will support you to tell captivating stories with your
              PFPs and build a community of your own.
            </p>
          </div>
        </div>
      </section>
      <section className="four">
        <div className="app__content">
          <div className="app__content__description">
            <img src={centerLine} alt="dotStory" />
            <h3>bring your characters to life</h3>
          </div>
          <div>
            <img
              src={isMobileView ? catGroupMobile : catGroup}
              alt="Let's Tell stories"
            />
          </div>
        </div>
      </section>
      <section className="newsletter" ref={newsletterRef}>
        <div className="newsletter__content">
          <p>What are you waiting for, join us today!</p>
          <div className="newsletter__content__view">
            <input type="text" placeholder="YOUR@EMAIL.COM" />
            <button className="submit_btn">Enter</button>
          </div>
        </div>
      </section>
      <section className="socialFooter">
        <div className="socialFooter__content">
          <img src={logo} alt="dotStory" />
          <h5>Create, Explore & Collect Comics</h5>
        </div>
        <div className="socialFooter__content">
          <div className="socialFooter__socials">
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </div>
          <p>© {new Date().getFullYear()} All Rights Reserved. </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
