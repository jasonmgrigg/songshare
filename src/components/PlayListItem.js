import React, { Component } from 'react';

class PlayListItem extends Component {
  render() {
    let cards = this.props.songs.map(song => {
      return (
        <ul className="card" key={song._id}>
          <li>
            User Name: {song.userName}
          </li>
          <li>
            Artist/Band: {song.songArtist}
          </li>
          <li>
            Title: {song.songTitle}
          </li>
          <li>
            Notes: {song.songNotes}
          </li>
        </ul>
      );
    });
    return (
      <div className="card">
        {cards}
      </div>
    );
  }
}

export default PlayListItem;
