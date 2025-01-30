import { routerType } from '@/types/router.types'
import { Route, Routes } from 'react-router'
import { pagesData } from './pagesData'
export const Router = () => {
	const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
		return <Route key={title} path={`/${path}`} element={element} />
	})
	return <Routes>{pageRoutes}</Routes>
}
