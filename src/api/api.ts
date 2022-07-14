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
    getImageById() {
        return API.get(`/image?field=movieId&search=326&field=type&search=backdrops&field=language&search=de&token=${API_KEY}`)
            .then(r => {
                return r.data
            })
    },
    async getMoviesByFilter() {
        const {data} = await API.get(`/movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=1&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`)
        return data;
    },
    async getSeriesByFilter() {
        const {data} = await API.get(`/movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`)
        return data;
    },
    async getСartoonsByFilter() {
        const {data} = await API.get(`/movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=3&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`)
        return data;
    },
    async getFavorites(query:string) {
        // const {data} = await API.get(`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&${query}&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`)
        const {data} = await API.get(`/movie?${query}&token=${API_KEY}`)
        return data;

    },

}
