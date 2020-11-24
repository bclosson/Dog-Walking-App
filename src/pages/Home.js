import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Background from '../images/pexels-la-miko-3671301.jpg'

// let sectionStyle = {

//   width: "100px",
//   height: "100px",

//   backgroundImage: 'url(' + {Background} + ')'
// }

class Home extends Component {
  state = {  }

  componentDidMount() {
    let key = 'rqgLcLaO8ZSjNJDMdqy1i19a3qZBrDVBrcGHHWF366C34RtFJN'
let secret = 'kfQMxVox4kH2I7A56kwo1JPrJyoRuQEnxWHwfoDc'
let size="medium"
let location = 92625
let goodWithDogs = "true"
let goodWithChildren = "false"
let age = 'baby'
let coat = ''

fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {

	// Return the response as JSON
	return resp.json();

}).then(function (data) {

	// Log the API data
	console.log('token', data);

	// Return a second API call
	// This one uses the token we received for authentication
	return fetch('https://api.petfinder.com/v2/animals?limit=5&type=dog&location=' + location + '&good_with_dogs=' + goodWithDogs + '&size=' + size + '&good_with_children=' + goodWithChildren + '&age=' + age + '&coat=' + coat,  {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

}).then(function (resp) {

	// Return the API response as JSON
	return resp.json();

}).then(function (data) {

	// Log the pet data
	console.log('pets', data);

}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});
  }
  render() { 
    return ( 

      <div className='home-body'>

        <div className="content">
        <h3 className="welcome">Welcome to Puppy Love</h3>
        <p className="middle-intro">We take the guess work out of finding your new companion</p>
        <p className="middle-intro">Tired of online dating? <br></br>Get a dog.</p>
        <p className="welcome orange-font">You can train him...</p>
        <Link to = '/formpage' className='btn button-orange'>FIND YOUR MATCH</Link>
        </div>
        

      </div>
     );
  }
}
 
export default Home;
  
  
  