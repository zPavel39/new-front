import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import styles from './main-page.module.scss'

const MainPage = () => {
	const navigate = useNavigate()
	const clickHandler = () => {
		navigate('/')
	}
	return (
		<div className={styles.mainPage}>
			<Sidebar />
		</div>
	)
}

export default MainPage
