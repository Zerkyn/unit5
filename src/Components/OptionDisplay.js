import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from '../redux/slices/potentialCountriesSlice'

const OptionDisplay = () => {
    const currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)
    return (
        <div className="stack">{currentPotentials.map((el, i) => {
            return (
                <h2 key={el.name.official} className="country-option">
                    {el.name.common}
                </h2>
            )
        })}</div>);
};

export default OptionDisplay;
