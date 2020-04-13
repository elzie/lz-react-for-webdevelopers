import React from 'react';
import styled from 'styled-components';

import BackGround from '../img/hotel/events_conference.jpg';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${BackGround});
`;

const Header = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 5vh;
  color: white;
`;

class StatusUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.UpdatesPagePageRef = React.createRef();
  }
  componentDidMount() {
    this.props.refProp(this.UpdatesPagePageRef.current.offsetTop);
  }
  render() {
    return (
      <div ref={this.UpdatesPagePageRef}>
        <Wrapper>
          <div>
            <Header>Status Updates</Header>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default StatusUpdates;
