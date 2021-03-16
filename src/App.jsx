import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import CardList from './CardList';
import { placards } from './placards';


class App extends Component {
    constructor() {
        super()
        this.state = {
            placards: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ placards: placards })
    }

    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const { placards, searchfield } = this.state;
        const filteredPlacards = placards.filter(placard => {
            return placard.Assigned_Parking_Stall_Number.toString().toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='mt0 pt3 pb3 f4 green'>Randolph Parking Program App</h1>
                <SearchBox searchChange={this.OnSearchChange} />
                <Scroll>
                    <CardList placards={filteredPlacards} />
                </Scroll>
                <footer className='pt3 pb1 f5'>
                    Hive Society ©
                </footer>
            </div>
        )
    }
}

export default App;