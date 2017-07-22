import React, { Component } from 'react';

class PlayList extends Component  {
    constructor() {
        super()
        this.state = {
            playlisting: []
        }
    }

    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then((response) => {
          return response.json()
        }).then((data) => {
          let songs = data.results;
          console.log(songs)
          this.setState({songs: songs})
        })
      }

      render() {
        let songArray = this.state.songs;
        let songs = songArray.map((songs) => {
          return (
            <div key = {songs.name} className = "col-md-4">

            </div>

          )
        })

        return (
          <div className="App">
            {}
            Song Display
            {songs}
          </div>



      );
      }
}


export default PlayList;
