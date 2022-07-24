import React from 'react'
import { Link } from 'react-router-dom'

const FooterNavItem = ({ path, label }) => {
	return (
		<li>
			<Link
				to={path}
				className='whitespace-normal hover:text-tahiti transition-colors ease-out duration-300'
			>
				{label}
			</Link>
		</li>
	)
}

export default FooterNavItem
