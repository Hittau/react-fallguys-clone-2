import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
	return (
		<Routes>
			{routes.map(({ path, Element }) => (
				<Route key={path} path={path} element={Element} />
			))}
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default AppRouter
