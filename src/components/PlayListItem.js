import React, { Component } from 'react';

class PlayListItem extends Component {

  render() {
    let songInfo = this.props.songs.map(song => {
      return (
        <ul className="card" key={song._id}>
          <li>
            User Name: {song.userName}
          </li>
          <li>
            Artist/Band: {song.songArtist}
          </li>
          <li>
            Song Title: {song.songTitle}
          </li>
          <li>
            Song Notes: {song.songNotes}
          </li>
        </ul>
      );
    });
    return (
      <div className="card">
        {songInfo}
      </div>
    );
  }
}

export default PlayListItem;
