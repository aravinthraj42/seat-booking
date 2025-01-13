  import React from "react";

  const BookingSummary = ({ selectedSeats, setSelectedSeats, pricing }) => {
    const totalCost = selectedSeats.reduce((sum, seat) => {
      const tier = seat[0] < "C" ? "Silver" : seat[0] < "E" ? "Gold" : "Platinum";
      return sum + pricing[tier];
    }, 0);

    const clearSelection = () => {
      setSelectedSeats([]); // Clears the selected seats
    };

    return (
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-xl font-bold">Booking Summary</h2>
        <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
        <p>Total Cost: ₹{totalCost}</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            alert("Seats booked successfully!")
            setSelectedSeats([]);
          }
        }
          disabled={selectedSeats.length === 0}
        >
          Book Now
        </button>
        <button
    className="mt-4 w-full px-4 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"
    onClick={clearSelection}
    disabled={selectedSeats.length === 0}
  >
    Clear Selection
  </button>
      </div>
    );
  };

  export default BookingSummary;
