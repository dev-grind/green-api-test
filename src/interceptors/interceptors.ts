// import { getStoredUser, onLogout } from '@/services/auth_token.service'
import axios, { type CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	headers: {
		'Content-Type': 'application/json',
	},
	// withCredentials: true,
}

const axiosClassic = axios.create(options)

export { axiosClassic }
