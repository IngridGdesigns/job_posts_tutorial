import React, {Component} from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

class Table extends Component {
    render() {

        const { characterData } = this.props
        //passing props from app to table => table body
        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData}/> 
            </table>
           
        )
    }
}

export default Table