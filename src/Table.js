import React, {Component} from 'react'


const TableHeader = () => {
    return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove</th>
                </tr>
            </thead>
    )
}

const TableBody = props => {

    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.deleteCharacter(index)}>Delete</button>
                </td>
            </tr>
           
        )
    })

        return (
                <tbody>{rows}</tbody>
                  
        )
}


class Table extends Component {
    render() {

        const { characterData, deleteCharacter } = this.props;
        //passing props from app to table => table body
        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData}
                deleteCharacter={deleteCharacter}
                
                /> 
            </table>
           
        )
    }
}

export default Table