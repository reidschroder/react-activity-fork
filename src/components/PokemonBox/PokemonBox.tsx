import React from 'react'
import { Pokemon } from '../../models/Pokemon'

export default function PokemonBox(props:any) {



  return (
         <div>
            <img src={props.img} alt={props.name}/>
            <h4>{props.name}</h4>
            <p>Level: {props.level}</p>
            <p>Health: {props.health}</p>
            <p>Damage: {props.damage}</p>
            <button onClick={props.onDelete}>Delete</button>
         </div>
         
         )
}
