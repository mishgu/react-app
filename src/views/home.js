/*jshint esversion: 6 */
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import React from 'react';
import { Helmet } from 'react-helmet';

import FeatureCard from '../components/feature-card';
import './home.css';
import Button from "react-bootstrap/Button";
import {Badge} from "react-bootstrap";
import background_ from "../images/man-8514870_1920.jpg";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push("/question1");
  }


  return (
    <div className="home-container">
      <div className="home-features">
        <div className="featuresContainer" style={{
          backgroundImage: `url(${background_})`,
        }}>
          <div className="home-features1">
            <div className="home-container02">
              <h2 className="home-features-heading heading2">
                Вкажіть ваш вік
              </h2>
            </div>
            <div className="home-container03">
              <button className="home-button buttonFilled" onClick={handleClick}>
                25-30
              </button>
              <button className="home-button buttonFilled" onClick={handleClick}>
                31-40
              </button>
              <button className="home-button buttonFilled" onClick={handleClick}>
                41-50
              </button>
              <button className="home-button buttonFilled" onClick={handleClick}>
                50+
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
