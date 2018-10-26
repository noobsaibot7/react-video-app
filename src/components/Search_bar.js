import React, { Component } from 'react';

// class based component
class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div className='search-bar'>
                <input
                    className="form-control mx-auto"
                    value={this.state.term}
                    onChange={e => this.onInput(e.target.value)}
                    placeholder="Search out your favorite video"
                />
                <p className="text-muted">Built with love  by Fbozz</p>
            </div>
        );
    }

    onInput(term) {
        this.setState({ term });
        this.props.onSearch(term)
    }
}
// function based component
// const Searchbar = () =>(<input />);

export default Searchbar;