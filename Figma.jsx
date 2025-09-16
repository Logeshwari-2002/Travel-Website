import React from "react";
import logo from "./Img/logo.png";
import bg from "./Img/bg.jpeg";
import pic1 from "./Img/pic1.png";
import pic2 from "./Img/pic2.png";
import pic3 from "./Img/pic3.png";
import pic4 from "./Img/pic4.jpeg";
import pic5 from "./Img/pic5.jpeg";

function Figma() {
  return (
    <div className="body">
      
      <nav className="navbar">
        <div className="logo">GoTrip</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="auth">
          <button className="signup">Sign Up</button>
          <button className="login">Login</button>
        </div>
      </nav>

      
      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-text">
          <h1>
            Explore The Natural <br /> Beauty Of Halmahera <br /> With Us
          </h1>
          <p>
            Explore the beauty of God's earth in a <br /> beautiful forest and
            have fun.
          </p>
          <button className="cta">Explore Now</button>
        </div>
        <div className="hero-img">
          <img src={logo} alt="Travel" />
        </div>
      </section>

      
      <section className="choice">
        <h4>Choice of</h4>
        <h2>Destinations</h2>
        <div className="destinations">
          <img src={pic1} alt="Destination 1" />
          <img src={pic2} alt="Destination 2" />
          <img src={pic3} alt="Destination 3" />
        </div>
        <p>
          Explore the beauty of God's earth in <br /> a beautiful forest and
          have fun
        </p>
        <button className="cta">Explore Now</button>
      </section>

      
      <section className="custom">
        <div className="custom-img">
          <img src={pic4} alt="Customer" />
        </div>
        <div className="custom-text">
          <h4>
            What do customers say <br /> about us?
          </h4>
          <h5>Alpanasap</h5>
          <div className="profile">
            <img src={pic5} alt="User" />
            <span>Japung, Indonesia</span>
          </div>
          <p>
            Very satisfying service makes it comfortable, <br /> a beautiful
            place in the world.
          </p>
          <div className="stars">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>☆</span>
          </div>
        </div>
      </section>

      
      <section className="box">
        <h3>
          Prepare Yourself And <br /> Start Exploring With Us.
        </h3>
        <p>There's the best discount for you today.</p>
        <button className="cta">Get Started</button>
      </section>

    
      <section className="newsletter">
        <h3>
          Subscribe <br /> To Our Newsletter
        </h3>
        <div className="sub">
          <input type="email" placeholder="Yourmail@mail.com" />
          <button>Subscribe</button>
        </div>
      </section>

      
      <footer className="footer">
        <div className="logo">GoTrip</div>
        <ul className="footer-links">
          <li>Home</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="auth">
          <button className="signup">Sign Up</button>
          <button className="login">Login</button>
        </div>
      </footer>
    </div>
  );
}

export default Figma;
