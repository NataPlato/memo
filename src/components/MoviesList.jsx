import {Movie} from "./Movie";

function MoviesList(props) {
    const {moviesList = []} = props

    return <div className="moviesList">
        {moviesList.length ? moviesList.map(movie => (
                <Movie key={movie.imdbID} {...movie} />)) :
            <h4>Ничего не найдено</h4>
        }
    </div>;
}

export
{
    MoviesList
}