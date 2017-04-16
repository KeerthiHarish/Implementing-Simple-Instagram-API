import React from 'react';
import FeedContainer from './FeedContainer'

export default class Feed extends React.Component {

  render() {
    let paginateNext = this.props.paginateNext
    let items = this.props.items
    let openPost = this.props.openPost
    let searchUser = this.props.searchUser
    let username = this.props.username
    let isFetched = this.props.fetched;
    let dataLoad = null;
    if (isFetched) {
      dataLoad = <FeedContainer items={items}
                    paginateNext={paginateNext}
                    openPost={openPost}
                    searchUser={searchUser}
                    username={username}/>
    } else {
      dataLoad =
      <div onLoad={this.props.getFeed()}>
        Loading Feed
        <br/><br/>
        <h4>Data Not Loading ?</h4>
        <p>If the data does not load within 5 seconds, there must be CORS Policy active
        on the server which is preventing the application to load.</p>
        <h4>Steps:</h4>
        <p>1. Download this
        <a href="https://chrome.google.com/webstore/detail/cors-toggle/omcncfnpmcabckcddookmnajignpffnh?utm_source=chrome-app-launcher-info-dialog"
          target="_blank"> Google Chrome Plugin
        </a> </p>
        <p>2. After installation of the plugin, please enable it.</p>
        <p>3. Refresh the page.</p>
      </div>
    }
    return (
      <div>
        {dataLoad}
      </div>
    );
  }
}
