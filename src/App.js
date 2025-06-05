import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Le Header reste visible sur toutes les pages */}
      
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={
          <>
            <Home />
            <Services /> {/* Si vous voulez Services sur la home */}
            <Team />    {/* Si vous voulez Team sur la home */}
          </>
        } />
        
        {/* Route alternative pour Services seul */}
        <Route path="/services" element={<Services />} />
        
        {/* Route pour la page Team */}
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;