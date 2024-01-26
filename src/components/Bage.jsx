import { memo } from 'react';
import img from '../assets/growlithe.gif'
import '../styles/Bage.css'

// eslint-disable-next-line react/display-name
export const Bage = memo(({ limit }) => {
    return (
        <div className="bage">
            <div className='bage__item'><img className='bage__image' src={img} /></div>
            <div className='bage__item'><span className='bage__text'>Loaded {limit} pokemons</span></div>
        </div>
    )
})