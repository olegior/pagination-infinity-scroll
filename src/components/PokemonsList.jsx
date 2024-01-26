import { PokemonCard } from "./PokemonCard";
import { Spinner } from "./Spinner";
import '../styles/PokemonsList.css'

export const PokemonsList = ({ data }) => {
    
    const getID = (url) => {
        return url.split('/').at(-2);
    }

    if (!data.length)
        return <Spinner />

    return (
        <div className="pokemons-list">
            {data.map(({ name, url }) => {
                const id = getID(url);
                return <PokemonCard
                    key={name}
                    {...{ name, id }}
                />
            })}
        </div>
    )
}
