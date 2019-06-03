import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters = [
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
    }

    render() {

    const { characters} = this.state

        removeCharacter = index => {
            const {characters} = this.state

            this.setState({
                characters: characters.filter((character, i) => {
                    return i !== index
                }),
            })
        }

        return (
            
            <div className='container'>
                <Table characterData={characters}
                        removeCharacter={this.removeCharacter}
                />
            </div>
        )
    }
}

export default App