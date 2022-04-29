import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/tailwind.output.css';
import ScrollToTop from './pages/components/ScrollToTop';
import Home from './pages/Home';
import AboutSwipet from './pages/components/externalPages/AboutPage';
import FaqPage from './pages/components/externalPages/FaqPage';
import PrivacyPolicy from './pages/components/externalPages/PrivacyPolicyPage';
import TermsAndConditions from './pages/components/externalPages/TermsAndConditionsPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
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
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
