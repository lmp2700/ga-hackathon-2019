import React, { Component } from 'react';

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }
    render() {
        return (
            <div>
                Search for a Thing: <input placeholder="search for a thing here" onChange={this.handleInputChange}></input>
            </div>
        )
    }
}

export default SearchContainer;