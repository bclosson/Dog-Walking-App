import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function DogInfo(props) {
  return (

    <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
        <Link to = {`/dog/${props.dog.id}`}>
          <img src={props.dog.photos[0].medium} />
        </Link>
          <span className="card-title"></span>
        </div>
        <div className="card-content">
          <h5 font-weight="bold">{props.dog.name}</h5>
          <p>{props.dog.breeds.primary}</p>
          <p>{props.dog.gender}</p>
        </div>
        {/* <div className="card-action">
          <Link to = {`/dog/${props.dog.id}`}>View this dog</Link>
        </div> */}
      </div>
    </div>
  </div>
    // <li className="card">
    //   <Link to={`/dogs/${props.dog._id}`} className="DogCardLink">
    //     <img 
    //       className="dogCardImg" 
    //       src={props.dog.coverArtUrl} 
    //       alt={props.dog.title} 
    //     />

    //     <img src={props.dog.photos[0].small} />
    //     <p>{props.dog.name}</p>
    //     <p>{props.dog.breed}</p>
    //     <p>{props.dog.age}</p>
    //     <p>{props.dog.size}</p>
    //     <p>{props.dog.tags}</p>
    //     <p>{props.dog.description}</p>
    //   </Link>
     
    
    // </li>
  )
}

export default DogInfo;
