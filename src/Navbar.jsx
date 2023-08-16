
import "./Navbar.css";
import React from "react";
import "./Modal.css";

const Navbar = ({ cityFilter, openModal }) => {
  return (
    <div className="containernav">
      <div className="navmain">
        <form className="form">
          <span id="hels">Helsinki,Finland</span>
          <input
            className="inputmain"
            type="text"
            placeholder="Add guests"
            value={cityFilter}
            onClick={openModal} // Abre el modal al hacer clic en el input
          />
          <button type="submit1" className="submit1">
            
            <span className="material-symbols-outlined" id='searchb'>search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
