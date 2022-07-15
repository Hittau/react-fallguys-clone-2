import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNavItem = ({ label, path }) => {
	return (
		<div className='xxl:px-4 flex group'>
			<Link
				to={path}
				className='relative flex flex-col justify-center uppercase text-white font-OpenSans text-xs xxl:text-[11px] tracking-[0.066rem] leading-[48px] sm:leading-[65px] w-full px-6 xxl:px-0 xxl:bg-transparent xxl:leading-4 after:absolute after:w-full after:bg-tahiti after:h-[6px] after:left-0 after:-bottom-[5px] after:opacity-0 after:transition-all after:duration-300 xxl:group-hover:after:-bottom-[0px] xxl:group-hover:after:opacity-100'
			>
				{label}
			</Link>
		</div>
	)
}

export default HeaderNavItem
