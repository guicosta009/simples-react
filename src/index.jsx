import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeView from './pages/home/home.view.tsx';

function App() {
  return <HomeView />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

