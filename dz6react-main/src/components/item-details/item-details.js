import React, { useState, useEffect } from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';


const ItemDetails = ({itemId}) => {
  const [state, setState] = useState({data: {}})
  const {id, name, gender, birthYear, eyeColor} = state.data;

  const swapi = new SwapiService() //Request to backend - json
  const itemImg = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;  

  useEffect(() => {
    
    swapi.getPerson(itemId)
    .then(data => {
      setState({data: data})
    })
  }, [itemId])

    return (
      <div className="person-details card">
        <img className="person-image"
          src={itemImg}/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  export default ItemDetails;
