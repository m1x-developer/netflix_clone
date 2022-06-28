import axios from 'axios'
import { useQuery } from 'react-query'

const instance = axios.create({
	baseURL: 'https://reqres.in/',
	withCredentials: true,
})

export const test = () => {}
