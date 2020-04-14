import React from 'react';

import styled from 'styled-components';

// Image imports
import Image1 from '../img/hotel/intro_room.jpg';
import Image2 from '../img/hotel/intro_pool.jpg';
import Image3 from '../img/hotel/intro_dining.jpg';
import Image4 from '../img/hotel/intro_attractions.jpg';
import Image5 from '../img/hotel/intro_wedding.jpg';

// Icon imports
import EventsIcon from '../img/icons/events.png';
import AttractionsIcon from '../img/icons/attractions.png';

const Wrapper = styled.div`
  height: 60vh;
  background-image: linear-gradient(to bottom, #efc94c, #e27a3f);
  @media (max-width: 360px) {
    height: 100vh;
  }
`;
const Header = styled.div`
  //   background: rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(to bottom, #0a5c71, #063642);
  height: 5vh;
  color: white;
  display: flex;
  align-items: center;
  & div {
    display: inline-block;
    margin: 0 10px 0 0;
  }
  @media (max-width: 360px) {
    & div {
      margin: 0;
    }
  }
`;
const CompanyName = styled.div`
  display: inline-block;
  //   cursor: pointer;
  text-transform: uppercase;
  margin: 0 10px 0 150px !important;
  width: 300px;
  text-align: center;
  background: #df4848;
  height: 100%;
  font-weight: 600;
  font-family: 200 1.5em/1.5em 'Exo 2', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 25px;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  @media (max-width: 360px) {
    width: 100px !important;
    margin: 0 !important;
    padding: 0 5px 0 5px;
    font-size: 12px;
  }
`;
const MenuItem = styled.div`
  display: inline-block;
  cursor: pointer;

  & div {
    color: #ffffff;
    font: 200 1em/1.5em 'Exo 2', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
    font-size: 1em;
    display: inline-block;
    padding: 13px 15px 10px 45px;
    text-decoration: none;
    background-size: 35px;
    background-repeat: no-repeat;
    background-position: 4px;
  }
  & div:hover {
    background-color: #efc94c;
    color: #063642;
  }
  @media (max-width: 360px) {
    & div {
      padding: 13px 10px 10px 45px;
      margin: 0 10px 0 10px !important;
      font-size: 12px !important;
    }
  }
`;
const Content = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  max-width: 550px;
  height: 55vh;
  margin: auto;
  text-align: center;

  & h3 {
    font-size: 26px;
    font-weight: normal;
    line-height: 100%;
    color: #a24a19;
    padding: 10px 0;
    margin: 0px;
  }
  & ul {
    margin: 0;
    padding: 0;
  }
  & li,
  img {
    width: 84px;
    height: 59px;
    // background: green;
    border-radius: 20%;
    margin: 0 10px 0 10px;
    display: inline-block;
  }
  @media (max-width: 360px) {
    height: 80vh;
    & div {
      margin: 20px;
    }
  }
`;

class HotelStatus extends React.Component {
  constructor(props) {
    super(props);
    this.HotelPagePageRef = React.createRef();
  }

  componentDidMount() {
    this.props.refProp(this.HotelPagePageRef.current.offsetTop);
  }

  attractionsClicked = () => {
    this.props.scrollToAttractions();
  };

  statusClicked = () => {
    this.props.scrollToUpdates();
  };

  render() {
    return (
      <div>
        <Wrapper>
          <div ref={this.HotelPagePageRef}>
            <Header>
              <CompanyName>Landon Hotel</CompanyName>
              <MenuItem onClick={this.statusClicked}>
                <div style={{ backgroundImage: `url(${EventsIcon})` }}>
                  <span>Status</span>
                </div>
              </MenuItem>
              <MenuItem onClick={this.attractionsClicked}>
                <div style={{ backgroundImage: `url(${AttractionsIcon})` }}>
                  <span>Attractions</span>
                </div>
              </MenuItem>
            </Header>
            <Content>
              <div>
                <ul>
                  <li>
                    <img
                      src={Image1}
                      alt="Intro Gallery Room Sample Pictures"
                    />
                  </li>
                  <li>
                    <img
                      src={Image2}
                      alt="Intro Gallery Pool Sample Pictures"
                    />
                  </li>
                  <li>
                    <img
                      src={Image3}
                      alt="Intro Gallery Dining Sample Pictures"
                    />
                  </li>
                  <li>
                    <img
                      src={Image4}
                      alt="Intro Gallery Attractions Sample Pictures"
                    />
                  </li>
                  <li>
                    <img
                      src={Image5}
                      alt="Intro Gallery Dining Sample Pictures"
                    />
                  </li>
                </ul>
                <h3>Welcome to the Landon Hotel</h3>
                <div>
                  The original Landon perseveres after 50 years in the heart of
                  West London. The West End neighborhood has something for
                  everyone—from theater to dining to historic sights. And the
                  not-to-miss Rooftop Cafe is a great place for travelers and
                  locals to engage over drinks, food, and good conversation. To
                  learn more about the Landon Hotel in the West End, browse our
                  website and
                  <a
                    href="../files/landon_information_sheet_London.pdf"
                    target="_blank"
                  >
                    {' '}
                    download our handy information sheet
                  </a>
                  .
                </div>
              </div>
            </Content>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default HotelStatus;
