import React, { Component } from "react";
import {Link} from 'react-router-dom'


class FormPage extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      coat: '',
      size: '',
      location: '',
      goodWithCats: '',
      goodWithKids: '',
      dogs : []
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
<div className="col s6">
        <div className="formprompt"> <h5><b>Answer the questions below to find your perfect match. </b></h5></div>
   <form>

<h5>Which best describes your living situation? (Select all that apply)</h5>
   <p>
      <label>
        <input name="age" type="checkbox" value="baby" />
        <span>I have a spacious house</span>
      </label>
    </p>
    <p>
      <label>
        <input name="age" type="checkbox" value="adult" />
        <span>I have a small apartment</span>
      </label>
    </p>
    <p>
      <label>
        <input name="age" type="checkbox"  value="senior" />
        <span>I have a yard with a fence</span>
      </label>
    </p>
    <p>
      <label>
        <input name="age" type="checkbox"  value="senior" />
        <span>I live close to a dog park</span>
      </label>
    </p>

    <h5>Do you want to be able to carry your dog?</h5>
   <p>
      <label>
        <input name="size" type="radio" value="small" onClick={this.handleChange}/>
        <span>Yes, in my purse</span>
      </label>
    </p>
    <p>
      <label>
        <input name="size" type="radio" value="medium" onClick={this.handleChange}/>
        <span>Only in an emergency</span>
      </label>
    </p>
    <p>
      <label>
        <input name="size" type="radio"  value="large" onClick={this.handleChange}/>
        <span>I'd like my dog to be able to carry a small child</span>
      </label>
    </p>

    <h5>Whats your ideal level of activity with your dog?</h5>
   <p>
      <label>
        <input name="" type="radio" value="baby" />
        <span>Leisurely stroll around the block</span>
      </label>
    </p>
    <p>
      <label>
        <input name="" type="radio" value="young"/>
        <span>I want a dog for protection</span>
      </label>
    </p>
    <p>
      <label>
        <input name="" type="radio"  value="adult"/>
        <span>I want a service dog</span>
      </label>
    </p>
   
    <h5>How comfortable are you training a dog?</h5>
   <p>
      <label>
        <input name="age" type="radio" value="adult" onClick={this.handleChange}/>
        <span>I prefer if it was already trained</span>
      </label>
    </p>
    <p>
      <label>
        <input name="age" type="radio" value="baby" onClick={this.handleChange}/>
        <span>I'd like to train it myself</span>
      </label>
    </p>
    <p>
      <label>
        <input name="age" type="radio"  value="young" onClick={this.handleChange}/>
        <span>I can learn to train it</span>
      </label>
    </p>

    <h5>How do you feel about dog hair on your clothes?</h5>
   <p>
      <label>
        <input name="coat" type="radio" value="short" onClick={this.handleChange}/>
        <span>I wear designer clothes, so not great</span>
      </label>
    </p>
    <p>
      <label>
        <input name="coat" type="radio" value="medium" onClick={this.handleChange}/>
        <span>Don't care</span>
      </label>
    </p>
    <p>
      <label>
        <input name="coat" type="radio"  value="long" onClick={this.handleChange}/>
        <span>I'll pay my housekeeper extra</span>
      </label>
    </p>

    <h5>Do you imagine your dog as an introvert or extrovert?</h5>
   <p>
      <label>
        <input name="goodWithKids" type="radio" value="true" onClick={this.handleChange}/>
        <span>Extrovert, my dog is my wingman</span>
      </label>
    </p>
    <p>
      <label>
        <input name="goodWithKids" type="radio" value="false" onClick={this.handleChange}/>
        <span>Introvert, just like me</span>
      </label>
    </p>
   

    <h5>Does your dog need to cohabitate with cats?</h5>
   <p>
      <label>
        <input name="goodWithCats" type="radio" value="true" onClick={this.handleChange}/>
        <span>Yes, my dog can't terrorize my cats</span>
      </label>
    </p>
    <p>
      <label>
        <input name="goodWithCats" type="radio" value="false" onClick={this.handleChange}/>
        <span>Nope, I'm a dog person</span>
      </label>
    </p>
    <p>
      <label>
        <input name="goodWithCats" type="radio"  value="false" onClick={this.handleChange}/>
        <span>I'd like it to chase the cats out of my yard</span>
      </label>
    </p>

    <h5>Whats your dream dog date?</h5>
   <p>
      <label>
        <input name="group8" type="radio" value="1" onClick={this.handleChange}/>
        <span>Netflix n' chill with my dog and a white claw</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group8" type="radio" value="2" onClick={this.handleChange}/>
        <span>An 8 mile scenic hike on a trail with a view</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group8" type="radio"  value="3" onClick={this.handleChange}/>
        <span>Going to the dog park where we can both socialize</span>
      </label>
    </p>

    <h5>How many times a day would you and your dog ideally go on a walk?</h5>
   <p>
      <label>
        <input name="group9" type="radio" value="1" onClick={this.handleChange}/>
        <span>Often, 3-5 times</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group9" type="radio" value="2" onClick={this.handleChange}/>
        <span>Moderate, before and after work, 1-2 times</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group9" type="radio"  value="3" onClick={this.handleChange}/>
        <span>I will mostly let him out in my yard</span>
      </label>
    </p>

    <h5>What's your Zipcode?</h5>
<p>
  <input name="location" className = "input-field" onChange={this.handleChange}  type = "text" ></input>
</p>



  
<Link className = 'btn button-orange spacing' to ={{
  pathname: '/index',
  aboutDog: {
    age: this.state.age,
    coat: this.state.coat,
    size: this.state.size,
    location: this.state.location,
    goodWithCats: this.state.goodWithCats,
    goodWithKids: this.state.goodWithKids,

  }
}}>FIND MY COMPANION</Link>
</form>
</div>

    </div>
    );
  }
}

export default FormPage;
