import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }
    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.searchtype}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }

    render() {
        return <div className="row">
            <div className='search-group'>
                <div className="input-field search-input">
                    <input
                        placeholder="search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(event => {
                            this.setState({search: event.target.value})
                        })}
                        onKeyDown={this.handleKey}
                    />
                </div>
                <button
                    className='btn search-btn'
                    onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search
                </button>
            </div>
            <div className='radio-btn'>
                {
                    ['all', 'movie', 'series'].map((i) => {
                        return <label key={`${i}`}>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-searchtype={`${i}`}
                                onChange={this.handleFilter}
                                checked={this.state.type === `${i}`}
                            />
                            <span>{`${i}`}</span>
                        </label>
                    })
                }
            </div>
        </div>

    }

}

export {Search}