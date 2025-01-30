import { routerType } from '@/types/router.types'
import { HomePage } from './home'

export const pagesData: routerType[] = [
	{
		path: '',
		element: <HomePage />,
		title: 'home',
	},
]
