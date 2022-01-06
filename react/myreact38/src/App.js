import { Route, Routes } from 'react-router-dom';
import Pagecomponents from './pages/Pagecomponents';
import PageRating from './pages/Pagecomponents';

function App() {
  return (
    <div className="app">
      <Pagecomponents />
      <Routes>
        <Route path="/" element={<div>대문</div>} />
        <Route path="/counter" element={<PageRating />} />
        <Route path="/reviews" element={<Pagecomponents />} />
      </Routes>
    </div>
  );
}

export default App;
