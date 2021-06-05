import React from "react";
import {MoviesList} from "../components/MoviesList";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY


class Main extends React.Component {
    state = {
        moviesList: [],
        loading: true,
    }

    componentDidMount() {
        this.searchMovies();
    }

    searchMovies = (str = 'all', type = 'all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str ? str : "all"}${
            type !== 'all' ? `&type=${type}` : ''
        }`)
            .then(response => response.json())
            .then(data => this.setState({moviesList: data.Search, loading: false}))
            .catch(() => {
                this.setState({loading: false})
            })
    }

    render() {
        const {moviesList, loading} = this.state;
        return <main className="content container">
            <Search searchMovies={this.searchMovies}/>
            {
                loading ?
                    <Preloader/> :
                    (<MoviesList moviesList={moviesList}/>)
            }

        </main>
    }
}

export {Main}