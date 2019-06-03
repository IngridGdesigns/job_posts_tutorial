import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters: [
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
        ],
        //this.deleteCharacter = this.deleteCharacter.bind(this)
    }

    deleteCharacter = (index) => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
        }),
    })
}

    render() {

    const { characters } = this.state


        return (
          
            <div className='container'>
                <Table characterData={characters} 
                deleteCharacter={this.deleteCharacter}/>
            </div>
        )
    }
}

export default App