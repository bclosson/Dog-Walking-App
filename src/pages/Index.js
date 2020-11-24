import React from 'react';
import DogCards from '../components/DogCards';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import DogInfo from '../components/DogInfo'

class IndexPage extends React.Component {
  state = {
    dogs: []
  }

  componentDidMount() {
let key = 'rqgLcLaO8ZSjNJDMdqy1i19a3qZBrDVBrcGHHWF366C34RtFJN'
let secret = 'kfQMxVox4kH2I7A56kwo1JPrJyoRuQEnxWHwfoDc'
let size= this.props.location.aboutDog.size
let location = this.props.location.aboutDog.location
let goodWithCats = this.props.location.aboutDog.goodWithCats
let goodWithKids = this.props.location.aboutDog.goodWithKids
let age = this.props.location.aboutDog.age
let coat = this.props.location.aboutDog.coat
console.log(coat)
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
	return fetch('https://api.petfinder.com/v2/animals?limit=5&type=dog&location=' + location + '&good_with_dogs=' + goodWithCats + '&size=' + size + '&good_with_children=' + goodWithKids + '&age=' + age + '&coat=' + coat,  {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

}).then(function (resp) {

	// Return the API response as JSON
	return resp.json();

}).then((data) => {

  // Log the pet data
  this.setState({
    dogs : data.animals
  })
	console.log('pets', data);

}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});
  }

  renderDogs = () => {
console.log('these are the dogs', this.state.dogs)
    return this.state.dogs.map((dog, index) => {
      return (<Slide><DogInfo dog={dog} key={dog.id}></DogInfo></Slide>)
    });
  }


  render() {
    return(
      <div className="container dogcards">

        <CarouselProvider


        <CarouselProvider

        naturalSlideWidth={300}
        naturalSlideHeight={500}
        totalSlides={this.state.dogs.length}
      >
        <div>
          <h4 id="match-text">These Are Your Top Matches!</h4>
        </div>
        <Slider className="card">
          {this.renderDogs()}
        </Slider>
        <div className="carousel-buttons">
          <div className='carousel-back-button'>
            <ButtonBack>Back</ButtonBack>
          </div>
          <div className='carousel-next-button'>
            <ButtonNext>Next</ButtonNext>
          </div>
        </div>
        <div className="all-dogs-text">
          <h4 id="view-all-text">Haven't found your perfect companion? <br></br>
              View all Dogs in Your Area!</h4>
        </div>
      </CarouselProvider>
       
       
      </div>
    );
  };
};

export default IndexPage;
