import React from 'react'
import './Table.css'
function Table({active,deaths,recovered,data}) 
{
    console.log(data.data.countries_stat)
    return (
        <div className="table">
            <h3>Country Wise Table Data</h3>
            {data.data.countries_stat.map((country) => (
                <tr>
                    <td>{country.country_name}</td>
                    <td>
                    <strong>{country.cases}</strong>
                    </td>
                </tr>
            ))}
            
            
            
        </div>
    )
}

export default Table
