import axios from 'axios'
import {getCurrentYear} from "../utils/getCurrentYear";

const API = axios.create({
    baseURL: 'https://api.kinopoisk.dev',
})

const API_KEY = 'R5EQXBX-DAE4CK6-MSS9KC7-3TK4F2C'

export const moviesAPI = {
    getNewMovies(limit = 10) {
        return API.get(`/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`)
            .then(r => {
                return r.data

            })
    },
    getNewSeries(limit = 10) {
        return API.get(`/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`)
            .then(r => {
                return r.data
            })
    },
    getMovieById(id:string) {
        return API.get(`/movie?search=${id}&field=id&token=${API_KEY}`)
            .then(r => {
                return r.data
            })
    },
}
