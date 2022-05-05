import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './assets/tailwind.output.css';
import ScrollToTop from './pages/components/ScrollToTop';
import Home from './pages/Home';
import AboutSwipet from './pages/components/externalPages/AboutPage';
import FaqPage from './pages/components/externalPages/FaqPage';
import PrivacyPolicy from './pages/components/externalPages/PrivacyPolicyPage';
import TermsAndConditions from './pages/components/externalPages/TermsAndConditionsPage';
import NotFound from './pages/components/externalPages/NotFound';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Helmet>
        <title>Swipet</title>
      </Helmet>

      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path='/about-swipet' element={<AboutSwipet />} />
            <Route path='/faq' element={<FaqPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route
              path='/terms-and-conditions'
              element={<TermsAndConditions />}
            />
          </Routes>
        </ScrollToTop>
      </Router>
    </React.StrictMode>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
