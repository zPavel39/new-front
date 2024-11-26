import React from 'react'
import styles from './header.module.scss'
import Logo from '../../assets/logo.png'

const Header = () => {
	return (
		<div className={styles.header}>
			<img className={styles.header__logo} alt='SV' src={Logo} />
		</div>
	)
}

export default Header
