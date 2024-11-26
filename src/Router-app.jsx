import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from './pages/first-page/FirstPage'
import MainPage from './pages/main-page/MainPage'

const RouterApp = ({ children }) => {
	return (
		<Router>
			{children}
			<Routes>
				<Route path='/' element={<FirstPage />} />
				<Route path='/main-page' element={<MainPage />} />
			</Routes>
		</Router>
	)
}

export default RouterApp
