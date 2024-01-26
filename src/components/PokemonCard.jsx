import { Spinner } from "./Spinner";
import '../styles/PokemonCard.css'
import { useState } from "react";

const src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export const PokemonCard = ({ name, id }) => {
    const [showSpinner, setShowSpinner] = useState(true);

    return (
        <div className="pokemon-card" key={name}>
            <div className="pokemon-card__item">
                <p className="pokemon-card__text">{name}</p>
            </div>
            <div className="pokemon-card__item">
                {showSpinner && <Spinner size={50} />}
                <img className="pokemon-card__image" src={`${src}${id}.png`} onLoad={() => {
                    setShowSpinner(false)
                }} />
            </div>
        </div>
    )
}
