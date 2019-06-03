import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Lisa',
                job: 'Concierge',
            },
            {
                name: 'Mac',
                job: 'Chef',
            },
            {
                name: 'Cecilia',
                job: 'Software Engineer',
            },
            {
                name: 'Marley',
                job: 'Graphic Designer',
            }
        ]
       

        return (
            <div className='container'>
                <Table characterData={characters}/>
            </div>
        )
    }
}

export default App