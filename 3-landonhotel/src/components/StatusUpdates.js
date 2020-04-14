import React from 'react';
import { statusRef } from '../firebase';
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
    margin: 20px 0 20px 0;
  }
`;
const StatusMessage = styled.div``;

const NameAndTime = styled.div`
  font-size: 76%;
  font-weight: 300;
  color: #f0eba3;
  margin-left: 0.75em;
  & ::before {
    content: '- ';
  }
  & span {
    display: inline-block;
    margin: 0 10px 0 10px;
  }
`;
class StatusUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.UpdatesPagePageRef = React.createRef();

    this.state = {
      status: [],
      id: null,
      msg: '',
      type: '',
      createdAt: '',
    };
  }
  componentDidMount() {
    this.props.refProp(this.UpdatesPagePageRef.current.offsetTop);

    // Firestore
    let query = statusRef
      .orderBy('createdAt', 'desc')
      .limit(6)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach((doc) => {
          //   console.log(doc.id, '=>', doc.data());
          const status = {
            id: doc.id,
            type: doc.data().type,
            msg: doc.data().msg,
            createdAt: doc.data().createdAt,
          };
          this.setState({
            status: [...this.state.status, status],
          });
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newStatus = {
        msg: this.state.msg,
        type: this.state.type,
        createdAt: new Date(),
      };
      //   console.log(newStatus);
      statusRef.add(newStatus);

      this.msgRef.current.value = '';
      this.typeRef.current.value = '';
    } catch (error) {
      console.log(error);
    }
  };

  typeRef = React.createRef();
  msgRef = React.createRef();

  render() {
    return (
      <div>
        <Wrapper>
          <div ref={this.UpdatesPagePageRef}>
            <Header>Status Updates</Header>
            <Content>
              <PostUpdate>
                <h3>Post an Update</h3>
                <form onSubmit={this.handleSubmit}>
                  <Group>
                    <label htmlFor="txt-message">Message</label>
                    <textarea
                      id="txt-message"
                      rows="3"
                      ref={this.msgRef}
                      onChange={(e) => this.setState({ msg: e.target.value })}
                    ></textarea>
                  </Group>
                  <Group>
                    <label htmlFor="txt-type">Type</label>
                    <select
                      id="txt-type"
                      ref={this.typeRef}
                      onChange={(e) => this.setState({ type: e.target.value })}
                    >
                      <option value="">- Select -</option>
                      <option value="management">Management</option>
                      <option value="dining">Dining Services</option>
                      <option value="operations">Operations</option>
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
                  {this.state.status.map((status) => {
                    return (
                      <li key={status.id}>
                        <StatusMessage>{status.msg}</StatusMessage>
                        <NameAndTime>
                          <span>
                            {status.type.charAt(0).toUpperCase() +
                              status.type.slice(1)}

                            {
                              //   status.createdAt.toDate().toLocaleDateString()
                              /*
                            Error: Objects are not valid as a React child (found: object with keys {seconds, nanoseconds}). 
                            If you meant to render a collection of children, use an array instead.
                            */
                            }
                          </span>
                          <span>
                            {new Intl.DateTimeFormat('en-GB', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            }).format(status.createdAt.toDate())}
                          </span>
                        </NameAndTime>
                      </li>
                    );
                  })}
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
