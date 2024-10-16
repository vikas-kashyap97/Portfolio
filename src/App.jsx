import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RetroLoading from './components/RetroLoading';
import RootLayout from './components/RootLayout';
import MatrixRain from './components/MatrixRain';
import customCursor from '/cursor.png'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen custom-Cursor"
      style={{
        cursor: `url(${customCursor}), crosshair`,
      }}
      >
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
      </div>
    </Router>
  );
}

export default App;