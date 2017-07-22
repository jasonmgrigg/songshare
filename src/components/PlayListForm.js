import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor(props){
    super(props);

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleArtistBandChange = this.handleArtistBandChange.bind(this);
    this.handleSongTitleChange = this.handleSongTitleChange.bind(this);
    this.handleNotesAboutSongChange = this.handleNotesAboutSongChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {userName: ''};
    this.state = {songArtist: ''};
    this.state = {songTitle: ''};
    this.state = {songNotes: ''};
  }

  handleUserNameChange(event){
    this.setState({userName: event.target.value});
  }
  handleArtistBandChange(event){
    this.setState({songArtist: event.target.value});
  }
  handleSongTitleChange(event){
    this.setState({songTitle: event.target.value});
  }
  handleNotesAboutSongChange(event){
    this.setState({songNotes: event.target.value});
  }
  handleSubmit(event){
      event.preventDefault();
      alert('Thank you, ' + this.state.userName + ' your name was submitted');
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          User Name:
          <input onChange={this.handleUserNameChange} userName='userName' type="text" value={this.state.username}/>
            <br />
          Artist / Band:
          <input onChange={this.handleArtistBandChange} songArtist="artistband" type="text" value={this.state.artistband}/>
            <br />
          Song Title:
          <input onChange={this.handleSongTitleChange} songTitle="songtitle" type="text" value={this.state.songtitle}/>
            <br />
          Notes about Song:
          <input onChange={this.handleNotesAboutSongChange} songNotes="notesaboutsong" type="text" value={this.state.notesaboutsong}/>
        </label>
            <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default PlayListForm;
