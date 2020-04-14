import React from 'react';
import styled from 'styled-components';

import BackGround from '../img/hotel/events_conference.jpg';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${BackGround});
  background-position: 65% top;
  background-size: cover;
`;
const Header = styled.div`
  background: rgba(0, 0, 0, 0.8);
  height: 6vh;
  color: white;
  display: inline-block;
  text-transform: uppercase;
  height: 100%;
  padding: 10px 0 10px 20px;
  font-weight: 600;
  font-family: 200 1.5em/1.5em 'Exo 2', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 25px;
  display: flex !important;
  align-items: center !important;
`;
const Content = styled.div`
  color: white;
`;
const PostUpdate = styled.div`
  width: 20em;
  background: rgba(0, 0, 0, 0.8);
  margin: 20px;
  padding: 10px;
  display: inline;
  margin: 2rem;
  float: left;
  & h3 {
    margin: 4px 0;
    padding: 0;
  }
`;
const Group = styled.div`
  display: block;
  & label {
    display: inline-block;
    width: 6em;
    vertical-align: top;
  }
  & textarea {
    width: 15.5em;
  }
  & select {
    width: 16em;
  }
`;
const Button = styled.div`
  display: flex;
  float: right;
  & input {
    margin: 10px 12px 10px 10px;
    width: 16em;
  }
`;
const AllUpdates = styled.div`
  width: calc(100% - 30em);
  background: rgba(0, 0, 0, 0.8);
  margin: 20px;
  display: inline;
  margin: 2rem;
  float: left;
  & ul {
    min-height: 150px;
  }
  & li {
    list-style-type: none;
  }
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
      <div>
        <Wrapper>
          <div ref={this.UpdatesPagePageRef}>
            <Header>Status Updates</Header>
            <Content>
              <PostUpdate>
                <h3>Post an Update</h3>
                <form>
                  <Group>
                    <label htmlFor="txt-message">Message</label>
                    <textarea id="txt-message" rows="3"></textarea>
                  </Group>
                  <Group>
                    <label htmlFor="txt-type">Type</label>
                    <select id="txt-type">
                      <option value="management">Management</option>
                      <option value="dining">Dining Services</option>
                      <option value="ops">Operations</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="pool">Pool</option>
                    </select>
                  </Group>
                  <Button>
                    <input type="submit" value="Post Update" />
                  </Button>
                </form>
              </PostUpdate>
              <AllUpdates>
                <ul>
                  <li>status update</li>
                  <li>status update</li>
                  <li>status update</li>
                </ul>
              </AllUpdates>
            </Content>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default StatusUpdates;
