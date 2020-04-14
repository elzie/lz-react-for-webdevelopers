import React from 'react';
import styled from 'styled-components';

// Image imports
import BackGround from '../img/hotel/attractions.jpg';

//Social media icon imports
import facebookImage from '../img/socialmedia/facebook.png';
import twitterImage from '../img/socialmedia/twitter.png';
import youtubeImage from '../img/socialmedia/youtube.png';

const Wrapper = styled.div`
  height: 60vh;
  background-image: url(${BackGround});
  background-position: center center;
  background-size: cover;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  height: 60vh;
  & div {
    margin: auto;
    background: rgba(256, 256, 256, 0.9);
    border-radius: 10px;
    padding: 20px;
    max-width: 50%;
    font-weight: 200;
  }
  & h1 {
    font: 200 1.5em/1.5em 'Exo 2', 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    color: #0e83a0;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
`;
const SocialCenter = styled.div`
  margin: auto;
`;
const Footer = styled.div`
  height: 10vh;
  background: #333333;
  display: flex;
  align-items: center;
  & img {
    margin: 0 10px 0 10px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
`;

class LocalAttractions extends React.Component {
  constructor(props) {
    super(props);
    this.AttractionsPagePageRef = React.createRef();
  }
  componentDidMount() {
    this.props.refProp(this.AttractionsPagePageRef.current.offsetTop);
  }
  render() {
    return (
      <div ref={this.AttractionsPagePageRef}>
        <Wrapper>
          <Content>
            <div>
              <h1>Local Attractions</h1>
              Whether you’re a theater enthusiast, enjoy epic shopping, or love
              to stroll and people watch, London’s West End has an endless
              opportunity to partake. The heart of London’s "Theatreland"
              offering the best in drama, comedy, and musical productions.
            </div>
          </Content>
        </Wrapper>
        <Footer>
          <SocialCenter>
            <img src={facebookImage} alt="" />
            <img src={twitterImage} alt="" />
            <img src={youtubeImage} alt="" />
          </SocialCenter>
        </Footer>
      </div>
    );
  }
}

export default LocalAttractions;
