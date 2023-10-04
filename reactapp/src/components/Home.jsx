import React from 'react';
import '../assets/css/Home.css';                            
import img1 from '../assets/images/arttt.jpg';
import img2 from '../assets/images/createart.jpg';
import img3 from '../assets/images/showcase.jpg';
import img4 from '../assets/images/connect.jpg';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ArtNest</h1>
          <p>An Online Artistic Collaboration Platform</p>
          <button className="btn">Get Started</button>
        </div>
        <img src={img1} alt="Artistic Collaboration" className="hero-image" />
      </section>

      <section className="features">
        <div className="feature" style={{borderColor:"#3A8E7A"}}>
          <img src={img2} alt="Feature 1" />
          <h2>Create Art Together</h2>
          <p>Collaborate with artists worldwide on creative projects.</p>
        </div>
        <div className="feature" style={{color:"#3A8E7A"}}>
          <img src={img3} alt="Feature 2" />
          <h2>Showcase Your Work</h2>
          <p>Display your art portfolio and gain recognition.</p>
        </div>
        <div className="feature"  style={{borderColor:"#3A8E7A"}}>
          <img src={img4} alt="Feature 3" />
          <h2>Connect with Artists</h2>
          <p>Connect, chat, and exchange ideas with fellow artists.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Join ArtNest Today</h2>
        <button className="btn">Sign Up Now</button>
      </section>

    </div>
  );
};

export default Home;