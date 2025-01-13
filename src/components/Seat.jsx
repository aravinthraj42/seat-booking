import React from "react";

const Seat = ({ id, type, price, isSelected, onClick }) => {
  return (
    <button
      className={`seat ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      title={`Seat: ${id}\nType: ${type}\nPrice: $${price}`}
    >
      {id}
    </button>
  );
};

export default Seat;
