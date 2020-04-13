import React from 'react';
import styled from 'styled-components';

// Image imports
import BackGround from '../img/hotel/attractions.jpg';

//Social media icon imports
import facebookImage from '../img/socialmedia/facebook.png';
import twitterImage from '../img/socialmedia/twitter.png';
import youtubeImage from '../img/socialmedia/youtube.png';

const Wrapper = styled.div`
  height: 50vh;
  background-image: url(${BackGround});
  background-position: center center;
  background-size: cover;
`;

const Header = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 5vh;
  color: white;
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
    margin: 0 20px 0 0;
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
      <div>
        <Wrapper>
          <Header ref={this.AttractionsPagePageRef}>Local Attractions</Header>
          <div></div>
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
