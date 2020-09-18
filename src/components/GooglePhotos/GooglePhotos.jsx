import React, { Component } from 'react'

class GooglePhotos extends Component {
    state = {
        photos: []
    }

    async componentDidMount() {

    }
    render() { 
        return (
            <>
            {!this.state.photos.length ? <a href = "/auth/google" >Sign in to Google Photos </a> : <h2>Photos now</h2>}
            </>
          );
    }
}
 
export default GooglePhotos;