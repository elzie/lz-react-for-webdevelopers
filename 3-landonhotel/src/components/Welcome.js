import React from 'react';
import styled from 'styled-components';

// Image imports
import backgroundImage from '../img/hotel/splash_hotelphoto.jpg';
import ArrowDown from '../img/misc/arrow.png';

const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-position: center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const CenterText = styled.div`
  display: flow-root;
  margin: auto;
`;
const WelcomeText = styled.h1`
  color: #ffffff;
  font-size: 5em;
  font-weight: 800;
  line-height: 0.8em;
  text-shadow: #000000 0 0 20px;
  text-align: center;
  width: 100%;
`;
const SubText = styled.h2`
  color: #ffffff;
  width: 60%;
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #ffffff;
  margin-top: 15px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1.3em;
`;
const Arrow = styled.div`
  background-image: url(${ArrowDown});
  background-size: 50px;
  width: 50px;
  height: 50px;
  margin: 20px auto;
  cursor: pointer;
`;
class Welcome extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  linkClicked = () => {
    this.props.scroll();
  };

  render() {
    return (
      <div>
        <Wrapper>
          <CenterText>
            <WelcomeText>Landon Hotel</WelcomeText>

            <SubText>West London</SubText>

            <Arrow onClick={this.linkClicked}></Arrow>
          </CenterText>
        </Wrapper>
      </div>
    );
  }
}

export default Welcome;
