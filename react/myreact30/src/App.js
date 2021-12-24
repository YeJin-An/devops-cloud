import PageAbout from './pages/PageAbout';
import PageCounter from './pages/PageCounter';
import TopNav from './pages/components/TopNav';
import React, { useState } from 'react';

function App() {
  const [pageName, setPageName] = useState('about');

  const changePageName = (pageName) => {
    setPageName(pageName);
  };

  return (
    <div style={{ opacity: 30 }}>
      <TopNav changePageName={setPageName} />
      {pageName === 'counter' && <PageCounter />}
      {pageName === 'about' && <PageAbout />}
    </div>
  );
}

export default App;
