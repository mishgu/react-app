/*jshint esversion: 6 */
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import React from 'react';
import { Helmet } from 'react-helmet';

import FeatureCard from '../components/feature-card';
import './home.css';
import Button from '@mui/material/Button';
import {Badge} from "react-bootstrap";
import background_ from "../images/man-8514870_1920.jpg";
import { useHistory } from "react-router-dom";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Home = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
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
                Вкажіть заробіток
              </h2>
            </div>
            <div className="home-container03">
              <button className="home-button buttonFilled">
                до 30.000 тис
              </button>
              <button className="home-button buttonFilled">
                31-50 тис
              </button>
              <button className="home-button buttonFilled">
                51-70 тис
              </button>
              <button className="home-button buttonFilled">
                більше 70 тис
              </button>
            </div>
          </div>
          <div className="home-next-button">
          <Button variant="contained" onClick={handleClick}>
              <ArrowBackIosIcon/>
          </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
