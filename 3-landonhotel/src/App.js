import React from 'react';
import './App.css';
import styled from 'styled-components';

import Welcome from './components/Welcome';
import HotelStatus from './components/HotelStatus';
import StatusUpdates from './components/StatusUpdates';
import LocalAttractions from './components/LocalAttractions';

const BackGround = styled.div`
  background-color: none;
`;
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    window.scrollTo(0, 1499);
    // Set back to 0,0 when done
  }
  hotelStatusDepth = null;
  hotelStatusRef = (ref) => {
    console.log('hotelStatusDepth', ref);
    this.hotelStatusDepth = ref;
  };
  scrollToHotelStatus = () => {
    window.scrollTo(0, this.hotelStatusDepth);
  };

  statusUpdatesDepth = null;
  statusUpdatesRef = (ref) => {
    console.log('statusUpdatesDepth', ref);
    this.statusUpdatesDepth = ref;
  };
  scrollToStatusUpdates = () => {
    window.scrollTo(0, this.statusUpdatesDepth);
  };

  localAttractionsDepth = null;
  localAttractionsRef = (ref) => {
    console.log('localAttractionsDepth', ref);
    this.localAttractionsDepth = ref;
  };
  scrollToLocalAttractions = () => {
    window.scrollTo(0, this.localAttractionsDepth);
  };

  render() {
    return (
      <BackGround>
        <Welcome scroll={this.scrollToHotelStatus} />
        <HotelStatus
          refProp={this.hotelStatusRef}
          scrollToUpdates={this.scrollToStatusUpdates}
          scrollToAttractions={this.scrollToLocalAttractions}
        />
        <StatusUpdates refProp={this.statusUpdatesRef} />
        <LocalAttractions
          refProp={this.localAttractionsRef}
          scroll={this.scrollToLocalAttractions}
        />
      </BackGround>
    );
  }
}

export default App;
