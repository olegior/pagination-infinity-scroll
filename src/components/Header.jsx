import { NavLink } from "react-router-dom";
import { NumberInput } from "./NumberInput";
import pokeball from '/pokeball.svg';
import '../styles/Header.css';
import { memo } from "react";

// eslint-disable-next-line react/display-name
export const Header = memo(({ limit, setLimit }) => {
    return (
        <header className="header">
            <div className="header__container container">
                <menu className="header__menu">
                    <NavLink className='header__link' to={'/'}><img className="header__logo" src={pokeball} alt="to homepage"
                        style={{ height: 40, width: 40 }}
                    /></NavLink>
                    <NavLink className='header__link header__link--yellow' to={'pagination'}>Pagination</NavLink>
                    <NavLink className='header__link header__link--yellow' to={'infinite'}>Infinite</NavLink>
                </menu>
                <NumberInput {...{ defaultValue: limit, setValue: setLimit, max: 96, min: 16, step: 8, span: 'limit', button: 'set' }} />
            </div>
        </header>
    )
})
