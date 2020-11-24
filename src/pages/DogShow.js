import React, { Component } from "react";
import Heart from '../images/Heart.png';
import Arrow from '../images/Arrow.png';
import RecSmall from '../images/rec-small.png';
import RecMed from '../images/rec-medium.png';
import RecLarge from '../images/rec-large.png';




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
        return this.state.dog.photos[0].large;
      }
  }

  render() {
    return (
      <div className="profile-container">
        <img id="heart" src={Heart} alt="" />
        <img id="arrow" src={Arrow} alt="" />
        <div className="basic-info">
          <div className="row valign-wrapper">
          <img className="profile-img" src={this.renderPhoto()} alt="" />
          
          <div> <h4>{this.state.dog.name}</h4>
        

         <p>{this.state.dog.gender}⚫️Size: {this.state.dog.size}⚫️Age: {this.state.dog.age}</p>
    
        <p>Adoption Fee: $100</p>
       </div>
       </div>       
        </div>
    
     
      <div className="card" id="personality">
               <h4>Personality: </h4>
               <p>cheerful   <img src={RecLarge} alt="" /></p>
               <p>peaceful   <img src={RecMed} alt="" /></p>
               <p>cuddly   <img src={RecLarge} alt="" /></p>
               <p>loud   <img src={RecSmall} alt="" /></p>
        </div>
       <div className="card" id="about">
               <h4>About:</h4>
               <p>{this.state.dog.tags}</p>
               <p>{this.state.dog.description}</p>
        </div>

         <div className="card" id="location-bio">
               <h4>Shelter Location: </h4>
               <h6>Los Angeles, CA</h6>
               <p>{this.state.dog.description}</p>
               <button className="btn orange">Schedule Visit</button>
        </div> 



      </div>
    );
  }
}

export default DogShow;
