import React from 'react';
// import $ from 'jquery';
import { SiteNavbar } from './components/navbar.jsx';
import Feed from './components/feeds/Feed';
import OpenModal  from './components/openItem/OpenModal';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.getFeed = this.getFeed.bind(this);
    this.paginateNext= this.paginateNext.bind(this)
    this.openPost = this.openPost.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      items: '',
      fetched: false,
      current_item: '',
      showModal: false,
      username: 'uninterrupted'
    }
  }

  searchUser(username) {

  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  getFeed() {
    const API = `https://www.instagram.com/${this.state.username}/media/`;
    fetch(API)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          items: data.items,
          fetched: true
        })
      )
      .catch((error) => console.log('Error'))
  }

  paginateNext() {
    const API = `https://www.instagram.com/${this.state.username}/media/`;
    let last_item = this.state.items[this.state.items.length - 1]
    let next_url = `${API}?max_id=${last_item.id}`;
    var newArray = this.state.items;
    var merge
    fetch(next_url)
      .then((response) => response.json())
      .then((data) => {
        merge = newArray.concat(data.items);
        this.setState({
          items: merge
        })
      })
      .catch((error) => console.log('Error'))
  }

  openPost(item) {
    this.setState({
      current_item: item
    });
    this.open();
  }

  render() {
    return (
      <div>
        <SiteNavbar/>
        <Grid>
          <Row>
            <Col md={12}>
              <Feed items={this.state.items}
                    fetched={this.state.fetched}
                    getFeed={this.getFeed}
                    paginateNext={this.paginateNext}
                    openPost={this.openPost}
                    searchUser={this.searchUser}
                    username={this.state.username}/>
            </Col>
            <OpenModal
              current_item={this.state.current_item}
              showModal={this.state.showModal}
              open={this.open}
              close={this.close}/>
          </Row>
        </Grid>
      </div>
    );
  }
}

