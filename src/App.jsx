import React, { useEffect, useState } from "react";
import "./App.css";
import "./Card.css";
import Card from "./Card.jsx";
import logo from "./img/logo.png";
import Navbar from "./Navbar";
import "./Navbar.css";
import "./Modal.css";

export default function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cityFilter, setCityFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const cities = ["Helsinki", "Turku", "Oulu", "Vaasa"]; // Lista de ciudades

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
      setFilteredData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCityFilter = () => {
    const filtered = data.filter((stay) =>
      stay.city.toLowerCase().includes(cityFilter.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const selectCity = (city) => {
    setCityFilter(city);
  };

  const applyCityFilter = () => {
    handleCityFilter();
    closeModal();
  };

  return (
    <>
      <nav id="search">
        <div id="img-logo">
          <img src={logo} alt="Logo" width="96" />
        </div>
        <Navbar openModal={openModal} />
      </nav>

      <div id="finland">
        <div className="stays">
          <span>Stays in Finland</span>
        </div>
        <div className="stays12">
          <span>{filteredData.length}+ Stays</span>
        </div>
      </div>

      <div className="cardcontainer">
        {filteredData.map((el, index) => (
          <Card props={el} key={index} />
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div id="navmodal">
              <div id="inputm">
                <h4 id='locationpp'>LOCATION</h4>
                <div>
                  <input 
                    className="inputmod"
                    type="text"
                    placeholder="Helsinki, Finland"
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                  />
                </div>
              </div>
              <div id="guestsm">
                <h4 id='locationpp'>GUESTS</h4>
                <h5 id='addg'>Add guests</h5>
              </div>
              <div id="searchp">
                <span
                  className="material-symbols-outlined"
                  id="searchm"
                  onClick={applyCityFilter}
                >
                  search <span id='seerch'>S e a r ch</span>
                  
                </span>
                
              </div>
            </div>
            <div id="flexmod">
              <div id="location1">
                <span className="material-symbols-outlined" id="locationm">
                  location_on
                </span>
                <span className="material-symbols-outlined" id="locationm">
                  location_on
                </span>
                <span className="material-symbols-outlined" id="locationm">
                  location_on
                </span>
                <span className="material-symbols-outlined" id="locationm">
                  location_on
                </span>
              </div>
              <ul id="location2">
                {cities.map((city) => (
                  <li key={city} onClick={() => selectCity(city)}>
                    {city}
                   </li>
                ))}
              </ul>
              <div id="location2">
                <span>,Finland</span>
                <span>,Finland</span>
                <span>,Finland</span>
                <span>,Finland</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
