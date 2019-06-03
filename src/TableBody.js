import React from 'react'
// pass the props through as a parameter, and map through the 
// array to return a table row for each object in the array. 
// This map will be contained in the rows variable, which we'll return as an expression.

const TableBody = props => {

    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
           
        )
    })
        return (
                <tbody>{rows}</tbody>
                  
        )
}

export default TableBody