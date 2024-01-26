import { useState } from "react";
import '../styles/NumberInput.css'

export const NumberInput = ({ span, button, defaultValue, setValue, max, min, step }) => {
    const [inputValue, setInputValue] = useState(defaultValue);
    const handleInputValue = (e) => {
        const value = +e.target.value;
        setInputValue(Math.abs(value > max ? max : value))
    }

    const handleButton = () => {
        setValue(inputValue);
    }

    return (
        <div className="input-number">
            <span className="input-number__text">{span}:</span>
            <input className="input-number__input" type="number"
                value={inputValue}
                max={max}
                min={min}
                step={step}
                onChange={handleInputValue}
            />
            <button className="input-number__button button" onClick={handleButton}>{button}</button>
        </div>
    )
}
