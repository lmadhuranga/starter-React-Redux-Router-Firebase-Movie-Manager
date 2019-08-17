import { FETCH_MOVIES, NEW_MOVIE, VIEW_MOVIE, UPDATE_MOVIE, DELETE_MOVIE }  from './movieTypes';
import { appConfig } from '../../config/globel.conf';
const entity = 'movies';
const entityUrl = `${appConfig.app.host.url}/${entity}`;

export const fetchMovies = () => dispatch => {
    fetch(`${entityUrl}?_sort=id&_order=desc`)
    .then(res => res.json())
    .then(movies => dispatch({
        type:FETCH_MOVIES,
        payload: movies
    }));
}

export const create = (formData) => dispatch => {
    fetch(`${entityUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(movie => dispatch({
        type:NEW_MOVIE,
        payload: movie
    })); 
}

export const update = (id, formData) => dispatch => {
    return fetch(`${entityUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(movie => dispatch({
        type:UPDATE_MOVIE,
        payload: movie
    }));
}

export const fetchMovie = (movieId) => dispatch => { 
    fetch(`${entityUrl}/${movieId}`)
    .then(res => res.json())
    .then(movie => dispatch({
        type: VIEW_MOVIE,
        payload: movie
    }));
}

export const deleteMovie = (id, formData) => dispatch => {
    return fetch(`${entityUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(movie => dispatch({
        type:DELETE_MOVIE,
        payload: "{}"
    }));
}
 