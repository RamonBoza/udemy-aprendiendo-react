import React, { Component } from 'react'

const API_KEY = 'a099dc74'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults } = results
                console.log(Search)
                this.props.onResults(Search)

            })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            onChange={this._handleChange}
                            placeholder="Movie to search ..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}