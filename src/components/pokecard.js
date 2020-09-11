import React from 'react'
import "../App.css"

// const pknmAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const pknmAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

export default function Pokecard(props) {
    console.log(props)

    const imgSrc = `${pknmAPI}${padToThree(props.id)}.png`
    console.log(imgSrc)
    
    return (
  <div className="col-4">
  <div className="card CARD animate__animated animate__fadeIn" >
  <div className="card-body">
    <h3 className="card-title pkmnName">{props.name}</h3>
    <div className="pkmnImg">
    <img className="hvr-float-shadow img-fluid" src={imgSrc} alt="pkmn img"/>
    </div>
    <div className="bottomBox">
    <h5 className="pkmnType">Type:{props.type}</h5>
    <h5 className="pkmnExp">EXP:{props.base_experience}</h5>
    </div>
  </div>
  </div>
  </div>
        )
}
