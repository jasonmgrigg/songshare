import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor(props){
    super(props);

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleArtistBandChange = this.handleArtistBandChange.bind(this);
    this.handleSongTitleChange = this.handleSongTitleChange.bind(this);
    this.handleNotesAboutSongChange = this.handleNotesAboutSongChange.bind(this);

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

  addToList = (event) => {
      event.preventDefault();
      this.setState({userName: event.target.value, songTitle: event.target.value, songArtist: event.target.value, songNotes: event.target.value});
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
      <form className="userinput">
        <div>
        <label htmlFor="userName">
          User Name:
        </label>
          <input className="userForm" onChange={this.handleUserNameChange} type="text" value={this.state.userName}/>
        </div>
        <div>
        <label htmlFor="songArtist">
          Artist / Band:
        </label>
          <input className="artistForm" onChange={this.handleArtistBandChange} type="text" value={this.state.songArtist}/>
        </div>
        <div>
        <label htmlFor="songTitle">
          Song Title:
        </label>
          <input className="titleForm" onChange={this.handleSongTitleChange} type="text" value={this.state.songTitle}/>
        </div>
        <div>
        <label htmlFor="songNotes">
          Notes about Song:
        </label>
          <input className="notesForm" onChange={this.handleNotesAboutSongChange} type="text" value={this.state.songNotes}/>
        </div>
        <input className="infoSubButton" type="submit" value="Submit" onClick={this.addToList} />
        
      </form>

    )
  }
}

//   render() {
//     return (
//       <form className="userinput" onSubmit={this.handleSubmit}>
//         <label>
//           User Name:
//           <input className="userForm" onChange={this.handleUserNameChange} userName='userName' type="text" value={this.state.userName}/>
//             <br />
//           Artist / Band:
//           <input className="artistForm" onChange={this.handleArtistBandChange} songArtist="songArtist" type="text" value={this.state.songArtist}/>
//             <br />
//           Song Title:
//           <input className="titleForm" onChange={this.handleSongTitleChange} songTitle="songtitle" type="text" value={this.state.songTitle}/>
//             <br />
//           Notes about Song:
//           <input className="notesForm" onChange={this.handleNotesAboutSongChange} songNotes="songNotes" type="text" value={this.state.songNotes}/>
//         </label>
//             <br />
//         <input className="infoSubButton" type="submit" value="Submit" />
//       </form>
//     )
//   }
// }

export default PlayListForm;
