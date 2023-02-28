import BottomNavigation from 'components/BottomNavigation';
import Topbar from 'components/Topbar';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Cake from 'screens/Cake';
import Canteen from 'screens/Canteen';
import Home from 'screens/Home';
import Lunch from 'screens/Lunch';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="w-full h-full bg-gradient-to-b from-jysk to-jysk-brand-400">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canteen" element={<Canteen />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/lunch" element={<Lunch />} />
        </Routes>
        <BottomNavigation />
      </div>
    </Router>
  );
}
