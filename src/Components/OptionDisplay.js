import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from '../redux/slices/potentialCountriesSlice'
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
    const currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)
    const dispatch = useDispatch()
    return (
        <div className="stack">{currentPotentials.map((el, i) => {
            return (
                <h2 key={el.name.official}
                    className="country-option"
                    onClick={() => { dispatch(setDisplayCountry(currentPotentials[i])) }}
                >
                    {el.name.common}
                </h2>
            )
        })}</div>);
};

export default OptionDisplay;
