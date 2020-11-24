import React, { Component } from "react";

class DogShow extends Component {
  state = {
    dog: {},
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    let key = "rqgLcLaO8ZSjNJDMdqy1i19a3qZBrDVBrcGHHWF366C34RtFJN";
    let secret = "kfQMxVox4kH2I7A56kwo1JPrJyoRuQEnxWHwfoDc";

    // Call the API
    // This is a POST request, because we need the API to generate a new token for us
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        // Return the response as JSON
        return resp.json();
      })
      .then(function (data) {
        // Log the API data
        console.log("token", data);

        // Return a second API call
        // This one uses the token we received for authentication
        return fetch(`https://api.petfinder.com/v2/animals/${id}`, {
          headers: {
            Authorization: data.token_type + " " + data.access_token,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      })
      .then(function (resp) {
        // Return the API response as JSON
        return resp.json();
      })
      .then((data) => {
        // Log the pet data
        console.log("pets", data);
        this.setState({ loading: true, dog: data.animal });
      })

      .catch(function (err) {
        // Log any errors
        console.log("something went wrong", err);
      });
    }

    renderPhoto = () => {
      if (this.state.dog.photos) {
        return this.state.dog.photos[0].medium;
      }
  }

  render() {
    return (
      <div className = 'container'>
        <img src={this.renderPhoto()} />
        <h1>{this.state.dog.name}</h1>
        
      </div>
    );
  }
}

export default DogShow;
