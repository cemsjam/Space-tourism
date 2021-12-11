import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="content grid">
      <div>
        <h1 className="main-title">
          So, you want to travel to<span>Space</span>
        </h1>
        <p className="main-subtitle">
          {" "}
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!{" "}
        </p>
      </div>
      <a href="/" className="btn main-btn">
        Explore
      </a>
    </main>
  );
};

export default Home;
