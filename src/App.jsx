import React, { useState } from 'react';

import LandingPage from './pages/LandingPage';


import UploadPage from './pages/UploadPage';
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [result, setResult] = useState('');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'home') {
      setResult('');
    }
  };

  if (currentPage === 'home') {
    return <LandingPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'upload') {
    return <UploadPage onNavigate={handleNavigate} result={result} setResult={setResult} />;
  }

  return null;
}
