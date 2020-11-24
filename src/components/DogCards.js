import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

 class DogCards extends React.Component {
  state = {
    dogs: [],
  }

componentDidMount() {
  this.setState({
    dogs: this.props.dogs
  })
  console.log(this.state.dogs)
}
  render() {

    return (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={125}
        totalSlides={5}
      >
        <Slider className="card">
          {/* <Slide index={2}>  </Slide>
          <Slide index={4}>I am the second Slide.</Slide>
          <Slide index={6}>I am the third Slide.</Slide>
          <Slide index={8}>I am the fourth Slide.</Slide>
          <Slide index={10}>I am the fifth Slide.</Slide> */}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default DogCards;