import React from "react";
import Seat from "./Seat";

const SeatGrid = ({ rows, cols, pricing, selectedSeats, onSeatSelect }) => {
  const getSeatType = (row) => {
    if (row < 2) return "Silver";
    if (row < 4) return "Gold";
    return "Platinum";
  };

  return (
    <div className="grid-container">
      {Array.from({ length: rows }).map((_, rowIndex) => (
         <div key={rowIndex} className="grid-row"
        >
          {Array.from({ length: cols }).map((_, colIndex) => {
            const seatId = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
            const type = getSeatType(rowIndex);
            return (
              <div key={seatId} className="grid-item">
              <Seat
                key={seatId}
                id={seatId}
                type={type}
                price={pricing[type]}
                isSelected={selectedSeats.includes(seatId)}
                onClick={() => onSeatSelect(seatId)}
              />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatGrid;
