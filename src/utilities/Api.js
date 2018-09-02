import axios from 'axios'
import { store } from '@/store'
import config from '@/config/config'


export function Api() {
	const apiCreate = axios.create({
		//config.api.baseURL
		baseURL: 'http://www.mocky.io/v2',
		headers: {
			Authorization: `Bearer ${store.getters.token}`
		}
	})

	/*api.interceptors.response.use(response => response,
	error => {
			if(error.response.status === 401) {
					router.push('Page404');
			} else if(error.response.status === 404) {
					router.push('Page404');
			} else if(error.response.status === 500) {
					router.push('Page500');
			} else {
					router.push('/');
			}
			return Promise.reject(error);
	});*/
	return apiCreate
}
export function Apid() {
	const apiCreate = axios.create()
	return apiCreate
}
