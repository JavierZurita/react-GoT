import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import HousePage from './pages/HousePage/HousePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import HouseDetailPage from './pages/HouseDetailPage/HouseDetailPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/character">Character</Link>
              <Link to="/house">House</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/character" element={<CharacterPage />}></Route>
            <Route path="/character/:id" element={<CharacterDetailPage />}></Route>
            <Route path="/house" element={<HousePage />}></Route>
            <Route path="/house/:id" element={<HouseDetailPage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
