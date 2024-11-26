import React, { useState } from 'react'
import styles from './sidebar.module.scss' // Импортируем SCSS-модуль

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div
				className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
			>
				<div className={styles.mainInfo}>
					<h2 className={styles.mainInfo_title}>Калининград Сельма</h2>
					<span className={styles.mainInfo_sub}>Елизаров</span>
					<span className={styles.mainInfo_sub}>Кассовая смена открыта</span>
					<span className={styles.mainInfo_date}>26.01.2023</span>
				</div>
				<button
					className={`${styles['sidebar-toggle']} ${
						isOpen ? styles.open_button : ''
					}`}
					onClick={toggleSidebar}
				>
					{isOpen ? '<<' : '>>'}
				</button>
				<ul className={styles['sidebar-list']}>
					<li className={styles['sidebar-item']}>Закрыть смену</li>
					<li className={styles['sidebar-item']}>Закрыть личную смену</li>
					<li className={styles['sidebar-item']}>Внести деньги</li>
					<li className={styles['sidebar-item']}>Изъять деньги</li>
					<li className={styles['sidebar-item']}>Печать х-отчета</li>
					<li className={styles['sidebar-item']}>Выбор устр-ва печати</li>
					<li className={styles['sidebar-item']}>Клавиатура</li>
					<li className={styles['sidebar-item']}>Обновить</li>
					<li className={styles['sidebar-item']}>Обновить меню</li>
					<li className={styles['sidebar-item']}>Мобильное приложение</li>
					<li className={styles['sidebar-item']}>Настройка внешнего вида</li>
					<li className={styles['sidebar-item']}>Настройки</li>
					<li className={styles['sidebar-item']}>Сменить тему</li>
				</ul>
			</div>
		</>
	)
}

export default Sidebar
