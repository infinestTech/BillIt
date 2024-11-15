import React, { useEffect, useRef } from 'react';
import '../css/HomeScreen.scss'; // Your CSS import
import img from '../images/logobird.png'; // Your image import
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HomePage = () => {
  const galaxyButtonRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Make sure galaxyButtonRef.current is not null and has been rendered
    if (galaxyButtonRef.current) {
      const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      const PARTICLES = galaxyButtonRef.current.querySelectorAll('.star');
      PARTICLES.forEach(P => {
        P.style.setProperty('--angle', `${RANDOM(0, 360)}deg`);
        P.style.setProperty('--duration', `${RANDOM(6, 20)}s`);
        P.style.setProperty('--delay', `${RANDOM(1, 10)}s`);
        P.style.setProperty('--alpha', `${RANDOM(40, 90) / 100}`);
        P.style.setProperty('--size', `${RANDOM(2, 6)}px`);
        P.style.setProperty('--distance', `${RANDOM(40, 200)}px`);
      });
    }
  }, []);

  // Removed the focus useEffect as it's not applicable for divs by default

  return (
    <div className="home-screen">
      <div className="content">
        <img src={img} alt="Logo" className="logo" />
        <div className="galaxy-button" ref={galaxyButtonRef} tabIndex="0"> {/* Added tabIndex to make it focusable if needed */}
          <button onClick={() => navigate('/home')}>
            <span className="spark"></span>
            <span className="backdrop"></span>
            <span className="galaxy__container">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="star star--static"></span>
              ))}
            </span>
            <span className="galaxy">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="galaxy__ring">
                  <span className="star"></span>
                </span>
              ))}
            </span>
            <span className="text-white">Let's Ignite</span>
          </button>
          <div className="bodydrop"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
