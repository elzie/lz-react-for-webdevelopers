import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60vh;
  background-image: linear-gradient(to bottom, #efc94c, #e27a3f);
`;
const Header = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 5vh;
  color: white;
  & div {
    display: inline-block;
    margin: 0 10px 0 0;
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
              <div>Landon Hotel</div>
              <div onClick={this.statusClicked}>Status</div>
              <div onClick={this.attractionsClicked}>Attractions</div>
            </Header>
            Hotel Status
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default HotelStatus;
