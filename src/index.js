import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './assets/tailwind.output.css';
import ScrollToTop from './pages/components/ScrollToTop';
import Home from './pages/Home';
import AboutSwipet from './pages/components/externalPages/AboutPage';
import FaqPage from './pages/components/externalPages/FaqPage';
import PrivacyPolicy from './pages/components/externalPages/PrivacyPolicyPage';
import TermsAndConditions from './pages/components/externalPages/TermsAndConditionsPage';
import NotFound from './pages/components/externalPages/NotFound';
import reportWebVitals from './reportWebVitals';
import TestimonialContent from './pages/components/externalPages/TestimonialExternalPages/TestimonialContent';
import ThemeProvider from './utilities/contexts/ThemeContext';
import './i18n';
import FeatureDetail from './pages/featureDetail';
import SwipeAnimation from './pages/components/swipe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <ThemeProvider>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route index element={<Home />} />
              <Route path='/about-swipet' element={<AboutSwipet />} />
              <Route path='/faq' element={<FaqPage />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
              <Route path='/swipet-journeys/:name' element={<TestimonialContent />} />
              <Route path='/feature/:name' element={<FeatureDetail />} />
              <Route path='/swipe' element={<SwipeAnimation />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  </HelmetProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
