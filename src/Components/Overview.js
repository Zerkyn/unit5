import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay)
    console.log(currentDisplay)
    return (
        <div>
            <h1>{currentDisplay.name.official}</h1>
            <h2>{currentDisplay.name.common}</h2>
            <table className='overview-table'>
                <tr>
                    <td>Borders: </td>
                    <td>
                        {currentDisplay.borders ?
                            currentDisplay.borders.map((el, i, arr) => {
                                if (i + 1 === arr.length) {
                                    return `${el}`
                                } else {
                                    return `${el}, `
                                }
                            }) : 'N/A'}
                    </td>
                </tr>
                <tr>
                    <td>Capitol: </td>
                    <td>{currentDisplay.capital.map(el => {
                        return `${el} `
                    })}
                    </td>
                </tr>
                <tr>
                    <td>Population: </td>
                    <td>{currentDisplay.population}</td>
                </tr>
                <tr>
                    <td>Continent: </td>
                    <td>{currentDisplay.continents.map(el => {
                        return `${el} `
                    })}
                    </td>
                </tr>
                <tr>
                    <td>Independent: </td>
                    {currentDisplay.independent ? <td>Yes</td> : <td>No</td>}
                </tr>
                <tr>
                    <td>Landlocked: </td>
                    {currentDisplay.landlocked ? <td>Yes</td> : <td>No</td>}
                </tr>
                <tr>
                    <td>UN Member: </td>
                    {currentDisplay.unMember ? <td>Yes</td> : <td>No</td>}
                </tr>
            </table>
        </div>
    )
}

export default Overview