import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
	const navigate = useNavigate()
	const clickHandler = () => {
		navigate('/')
	}
	return <div onClick={clickHandler}>MainPage</div>
}

export default MainPage
