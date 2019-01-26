import React, { Component } from 'react';

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }
    handleInputChange = () => {
        this.setState = ({
            query: this.search.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleInputChange} placeholder="search for something here"></input>
                </form>
            </div>
        )
    }
}

export default SearchContainer;