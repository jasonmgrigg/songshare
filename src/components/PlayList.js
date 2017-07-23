import React, { Component } from 'react';

class PlayList extends Component  {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            songs: [],
            userName: '',
            songArtist: '',
            songTitle: '',
            songNotes: ''
        };
    }
    handleSubmit(event){
      event.preventDefault();
    }

    componentDidMount() {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.setState({songs: data});
            console.log("state", this.state.songs);
          })
      }

      render() {
        let songArray = this.state.songs;
        let songs = songArray.map((songs) => {
          return (

            <div key = {songs.id} className = "col-md-4">
              <div className="card" >
                <div className="card-block">
                  <h6 className="card-subtitle mb-2 text-muted">User Name: {songs.userName}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Artist / Band Name: {songs.songArtist}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Song Title: {songs.songTitle}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Song Notes: {songs.songNotes}</h6>
                </div>
              </div>
            </div>

          )
        })

        return (
          <div className="App">
            {}
            <div onSubmit={this.handleSubmit} className="jumbotron">
              <h1 className="dislpay-3">Song List</h1>
              <input type="submit" value="Refresh Data" />
            </div>
            <div className="row">
            {songs}
          </div>

          </div>



      );
      }
}


export default PlayList;
