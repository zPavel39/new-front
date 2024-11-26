import React from 'react'
import './Preloader.scss'

const Preloader = () => {
	return (
		<div className='modal'>
			<div className='preloader-container'>
				<svg
					className='preloader'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 330 330'
				>
					<circle
						className='preloader__circle preloader__circle--one'
						cx='170'
						cy='170'
						r='160'
						stroke='#0e0bb8d0'
					/>
					<circle
						className='preloader__circle preloader__circle--two'
						cx='170'
						cy='170'
						r='135'
						stroke='#404041'
					/>
					<circle
						className='preloader__circle preloader__circle--three'
						cx='170'
						cy='170'
						r='110'
						stroke='#0e4577'
					/>
					<circle
						className='preloader__circle preloader__circle--four'
						cx='170'
						cy='170'
						r='85'
						stroke='#404041'
					/>
				</svg>
			</div>
			<span className='preloader__text'>Загрузка...</span>
		</div>
	)
}

export default Preloader
