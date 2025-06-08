import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import BookingModal from './components/BookingModal/BookingModal';
import About from './components/About/About';
import './App.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="App">
     <Header onBook={openBooking} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home onBook={openBooking} />
              <Services onBook={openBooking} />
              <Team onBook={openBooking} />
              <About />
            </>
          }
        />
        <Route path="/services" element={<Services onBook={openBooking} />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      {/* Affiche le modal si onBook est déclenché */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

export default App;
