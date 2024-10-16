import React, { useState, useEffect } from 'react';

const RetroLoading = ({ onLoaded }) => {
  const [stage, setStage] = useState('start');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadedResources, setLoadedResources] = useState([]);

  const resources = [
    'keyboardKeydown1',
    'keyboardKeydown3',
    'keyboardKeydown2',
    'keyboardKeydown4',
    'keyboardKeydown6',
    'keyboardKeydown5',
    'ccType',
    'startup'
  ];

  useEffect(() => {
    if (stage === 'loading') {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setStage('loaded');
            return 100;
          }
          const newResource = resources[Math.floor((prev / 100) * resources.length)];
          if (newResource && !loadedResources.includes(newResource)) {
            setLoadedResources((prev) => [...prev, newResource]);
          }
          return prev + 5;
        });
      }, 200);
      return () => clearInterval(interval);
    }
    if (stage === 'loaded') {
      onLoaded();
    }
  }, [stage, loadedResources, resources, onLoaded]);

  const handleStart = () => {
    setStage('loading');
  };

  return (
    <div className="bg-black text-green-500 font-mono p-4 min-h-screen flex flex-col items-center justify-center">
      {stage === 'start' && (
        <div className="text-center">
          <h1 className="text-2xl mb-4">Vikas Kashyap Portfolio 2024</h1>
          <p className="mb-4">Click start to begin</p>
          <button 
            onClick={handleStart} 
            className="border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors"
          >
            START
          </button>
        </div>
      )}
      {stage === 'loading' && (
        <div className="w-full max-w-md">
          <div className="mb-4">
            <p>Vikas,</p>
            <p>Kashyap Inc.</p>
            <p>Released: 05/11/2023</p>
            <p>HHBIOS (C)2024 Vikas Kashyap Inc.</p>
            <p>HSP S13 2000-2024 Special UC131S</p>
            <p>HSP Showcase(tm) XX 113</p>
            <p>Checking RAM : 14000 OK</p>
          </div>
          <div className="mb-4">
            <p>LOADING RESOURCES ({loadedResources.length}/{resources.length}).</p>
            {loadedResources.map((resource, index) => (
              <p key={index}>
                Loaded {resource} ... {Math.round((index + 1) / resources.length * 100)}%
              </p>
            ))}
          </div>
          <div className="w-full bg-green-900 h-2">
            <div
              className="bg-green-500 h-full transition-all duration-200"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetroLoading;