import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import FamilyPlanning from './pages/FamilyPlanning';
import SackGardening from './pages/SackGardening';
import WomensRights from './pages/WomensRights';
import WomensViolence from './pages/WomensViolence';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family-planning" element={<FamilyPlanning />} />
        <Route path="/sack-gardening" element={<SackGardening />} />
        <Route path="/womens-rights" element={<WomensRights />} />
        <Route path="/womens-violence" element={<WomensViolence />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;