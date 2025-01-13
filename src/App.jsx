import React, { useState } from "react";
import SeatGrid from "./components/SeatGrid";
import BookingSummary from "./components/BookingSummary";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const rows = 6;
  const cols = 10;

  const [selectedSeats, setSelectedSeats] = useState([]);

  // Prices based on seat tier
  const pricing = {
    Silver: 100,
    Gold: 150,
    Platinum: 200,
  };

  // Handler to toggle seat selection
  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats((prev) => prev.filter((s) => s !== seat));
    } else if (selectedSeats.length < 8) {
      setSelectedSeats((prev) => [...prev, seat]);
    } else {
      alert("You can only select up to 8 seats");
    }
  };

  return (
    <div className="p-4">
     <Header />
      <SeatGrid
        rows={rows}
        cols={cols}
        pricing={pricing}
        selectedSeats={selectedSeats}
        onSeatSelect={handleSeatSelect}
      />
      <BookingSummary 
         selectedSeats={selectedSeats}
         setSelectedSeats={setSelectedSeats} // Pass the function here
         pricing={pricing} />
         <Footer />
    </div>
  );
};

export default App;
