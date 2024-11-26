import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dell from '../../assets/dell-button.png'
import styles from './first-page.module.scss'
import Preloader from '../../components/loader/Preloader'

const FirstPage = () => {
	const navigate = useNavigate()
	const clickHandler = () => {
		navigate('/main-page')
	}
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const handleButtonClick = value => {
		setInput(prev => prev + value)
	}

	const handleDelete = () => {
		setInput(prev => prev.slice(0, -1))
	}
	useEffect(() => {
		if (input.length === 4) {
			setLoading(true)
			setTimeout(() => {
				setLoading(false)
				clickHandler()
			}, 2000)
		}
	}, [input])
	return (
		<div className={styles.pinPage}>
			{loading && <Preloader />}
			{!loading && (
				<>
					<div className={styles.pinPage__display}>
						{input || 'Введите PIN'}
					</div>
					<div className={styles.pinPage__grid}>
						{/* Кнопки 1–9 */}
						{Array.from({ length: 9 }, (_, i) => (
							<button
								className={styles.pinPage__button}
								key={i + 1}
								onClick={() => handleButtonClick((i + 1).toString())}
							>
								{i + 1}
							</button>
						))}

						{/* Кнопка "*" */}
						<button
							className={styles.pinPage__button}
							onClick={() => handleButtonClick('*')}
						>
							*
						</button>

						{/* Кнопка "0" */}
						<button
							className={styles.pinPage__button}
							onClick={() => handleButtonClick('0')}
						>
							0
						</button>

						{/* Кнопка "Удалить" */}
						<button className={styles.pinPage__button} onClick={handleDelete}>
							<img
								className={styles.pinPage__button_dell}
								src={Dell}
								alt='Dell'
							/>
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default FirstPage
