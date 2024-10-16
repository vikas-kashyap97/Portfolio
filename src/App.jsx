import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RetroLoading from './components/RetroLoading';
import RootLayout from './components/RootLayout';
import MatrixRain from './components/MatrixRain';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <Router>
      <section className="font">
        {!isLoaded && <RetroLoading onLoaded={handleLoaded} />}
        {isLoaded && (
          <>
            <MatrixRain />
            <Routes>
              <Route path="/" element={<RootLayout />} />
            </Routes>
          </>
        )}
      </section>
    </Router>
  );
}

export default App;