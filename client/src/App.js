import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListingPage from './components/ListingPage';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<ListingPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
