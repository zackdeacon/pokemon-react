import React from 'react';
import Pokecard from "./pokecard"
import Wrapper from "./wrapper"

// export default function machine1(props) {
//     console.log(props);
//     const {s1,s2,s3} = props;
//     const winner = (s1 === s2) && (s2 === s3);
//     return (
//         <div>
//             <p> {s1} {s2} {s3} </p>
//             <p>{winner ? 'Winner!' : 'Loser!'}</p>
//         </div>
//     )
// }
const pokemon = [ 
{id: 1, name: 'Bulbasaur', type: 'grass', base_experience: 65},
{id: 2, name: 'Ivysaur', type: 'grass', base_experience: 115},
{id: 3, name: 'Venosaur', type: 'grass', base_experience: 245},
{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
{id: 5, name: 'Charmeleon', type: 'fire', base_experience: 120},
{id: 6, name: 'Charizard', type: 'fire', base_experience: 270},
{id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
{id: 8, name: 'Wartortle', type: 'water', base_experience: 114},
{id: 9, name: 'Blastoise', type: 'water', base_experience: 260},
{id: 10, name: 'Caterpie', type: 'bug', base_experience: 39},
{id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
{id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
{id: 13, name: 'Weedle', type: 'bug', base_experience: 39},
{id: 14, name: 'Kakuna', type: 'bug', base_experience: 72},
{id: 15, name: 'Beedrill', type: 'flying', base_experience: 178},
{id: 16, name: 'Pidgey', type: 'flying', base_experience: 50},
{id: 17, name: 'Pidgeotto', type: 'flying', base_experience: 122},
{id: 18, name: 'Pidgeot', type: 'flying', base_experience: 216},
{id: 19, name: 'Rattata', type: 'normal', base_experience: 51},
{id: 20, name: 'Raticate', type: 'normal', base_experience: 145},
{id: 21, name: 'Spearow', type: 'flying', base_experience: 52},
{id: 22, name: 'Fearow', type: 'flying', base_experience: 145},
{id: 23, name: 'Ekans', type: 'poison', base_experience: 58},
{id: 24, name: 'Arbok', type: 'poison', base_experience: 157},
{id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
{id: 26, name: 'Riachu', type: 'electric', base_experience: 218},
{id: 27, name: 'Sandshrew', type: 'ground', base_experience: 60},
{id: 28, name: 'Sandslash', type: 'ground', base_experience: 158},
{id: 29, name: 'Nidoran', type: 'poison', base_experience: 55},
{id: 30, name: 'Nidorina', type: 'poison', base_experience: 128},
{id: 31, name: 'Nidoqueen', type: 'poison', base_experience: 227},
{id: 32, name: 'Nidoran', type: 'poison', base_experience: 55},
{id: 33, name: 'Nidorino', type: 'poison', base_experience: 128},
{id: 34, name: 'Nidoking', type: 'poison', base_experience: 227},
{id: 35, name: 'Clefairy', type: 'normal', base_experience: 113},
{id: 36, name: 'Clefable', type: 'normal', base_experience: 217},
{id: 37, name: 'Vulpix', type: 'fire', base_experience: 60},
{id: 38, name: 'Ninetails', type: 'fire', base_experience: 117},
{id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
{id: 40, name: 'Wigglytuff', type: 'normal', base_experience: 196},
{id: 41, name: 'Zubat', type: 'poison', base_experience: 49},
{id: 42, name: 'Golbat', type: 'poison', base_experience: 159},
{id: 43, name: 'Oddish', type: 'grass', base_experience: 64},
{id: 44, name: 'Gloom', type: 'grass', base_experience: 138},
{id: 45, name: 'Vileplume', type: 'grass', base_experience: 221},
{id: 46, name: 'Paris', type: 'poison', base_experience: 57},
{id: 47, name: 'Parasect', type: 'poison', base_experience: 142},
{id: 48, name: 'Venonat', type: 'poison', base_experience: 61},
{id: 49, name: 'Venomoth', type: 'poison', base_experience: 158},
{id: 50, name: 'Diglett', type: 'ground', base_experience: 53},
{id: 51, name: 'Dugtrio', type: 'ground', base_experience: 149},
{id: 92, name: 'Gastly', type: 'ghost', base_experience: 62},
{id: 93, name: 'Haunter', type: 'ghost', base_experience: 142},
{id: 94, name: 'Gengar', type: 'ghost', base_experience: 225},
{id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
{id: 150, name: 'Mewtwo', type: 'psychic', base_experience: 306},
{id: 151, name: 'Mew', type: 'psychic', base_experience: 280},

]

let hand1Arr = [];
let hand2Arr = [];

// let randNum = Math.floor(Math.random() * pokemon.length)
// console.log(randNum)

for (let i = 0; i < 12; i++) {
    let randNum = Math.floor(Math.random() * pokemon.length)
    if (hand1Arr.length < 6) {
    hand1Arr.push(pokemon[randNum])
    } else {
        hand2Arr.push(pokemon[randNum])
    }
    
}
console.log(hand1Arr)
console.log(hand2Arr)




export default function Pokedex() {



    return (
        <>
        <div className="container">
        <div className="row">
        {hand1Arr.map((pkmn) => (<Pokecard key={pkmn.id} id={pkmn.id} name={pkmn.name} type={pkmn.type} base_experience={pkmn.base_experience}/>))}
        </div>
        <div className="row">
        {hand2Arr.map((pkmn) => (<Pokecard key={pkmn.id} id={pkmn.id} name={pkmn.name} type={pkmn.type} base_experience={pkmn.base_experience}/>))}
        </div>
        </div>        
        </>
    )
}

