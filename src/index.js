import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/tailwind.output.css';
import Home from './pages/Home';
import AboutPage from './pages/links/aboutPage';
import FAQsPage from './pages/links/faqsPage';
import TermAndConditions from './pages/links/termsAndConditionsPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/faq' element={<FAQsPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/term-and-conditions' element={<TermAndConditions/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
