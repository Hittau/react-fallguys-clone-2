import React from 'react'
import HeaderControl from './HeaderControl'
import HeaderNavItems from './HeaderNavItems'

const HeaderNav = ({ isOpen }) => {
	return (
		<nav
			className={`${
				isOpen ? 'right-0' : '-right-full'
			} flex flex-col xxl:flex-row transition-all duration-300 fixed xxl:static top-[52px] h-[calc(100%_-_52px)] right-0 bg-[#313036] xxl:bg-transparent lg:h-auto w-[calc(100%_-_48px)] lg:w-[calc(100%_-_64px)] overflow-hidden xxl:w-auto z-50`}
		>
			<HeaderNavItems />
			<HeaderControl className='lg:hidden' />
		</nav>
	)
}

export default HeaderNav
