import React, { useState } from "react";
import "./Destinations.css";
import { data } from "../data/data";

const Destinations = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const destinations = data.destinations;
  return (
    <main className="destination-main">
      <h1 className="section-title">
        <span aria-hidden="true">01</span>Pick Your Destination
      </h1>
      <div className="destination-content">
        <div className="img-wrapper">
          {destinations.map((item, index) => {
            return (
              <picture
                key={index}
                className={`${
                  index === tabIndex
                    ? "planet-img-container show-img"
                    : "planet-img-container"
                }`}
              >
                <source srcSet={item.images.webp} type="image/webp" />
                <img src={item.images.png} alt={`The ${item.name}`} />
              </picture>
            );
          })}
        </div>
        <div className="info-wrapper">
          <div className="tab-btns">
            {destinations.map((planet, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className={`${
                    tabIndex === index ? "btn tab-btn selected" : "btn tab-btn"
                  }`}
                  onClick={() => setTabIndex(index)}
                >
                  {planet.name}
                </button>
              );
            })}
          </div>
          <div className="tablist">
            {destinations.map((item, index) => {
              return (
                <article
                  key={index}
                  className={
                    tabIndex === index ? "tab-item active" : "tab-item"
                  }
                >
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <hr />
                  <div className="destination-meta">
                    <div>
                      <h3>Avg. distance</h3>
                      <p>{item.distance}</p>
                    </div>
                    <div>
                      <h3>Est. travel time</h3>
                      <p>{item.travel}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destinations;
