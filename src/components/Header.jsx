import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/images/logo.webp'
import { Link } from 'react-router-dom'
import HeaderNav from './HeaderNav'
import { HOME_ROUTE } from '../utils/consts'
import HeaderControl from './HeaderControl'
import Burger from './Burger'
import { SiEpicgames } from 'react-icons/si'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const closeMenu = () => {
		setIsOpen(false)
		document.body.style.overflowY = 'scroll'
	}

	const toggleMenu = () => {
		setIsOpen(!isOpen)
		if (document.body.style.overflowY === 'hidden') {
			document.body.style.overflowY = 'scroll'
		} else {
			document.body.style.overflowY = 'hidden'
		}
	}

	const headerRef = useRef(null)

	useEffect(() => {
		const handleClickAway = e => {
			if (!headerRef.current.contains(e.target)) {
				closeMenu()
			}
		}

		const handleEsc = e => {
			if (e.keyCode === 27) {
				closeMenu()
			}
		}

		document.addEventListener('mousedown', handleClickAway)
		document.addEventListener('keydown', handleEsc)

		return () => {
			document.removeEventListener('mousedown', handleClickAway)
			document.removeEventListener('keydown', handleEsc)
		}
	})

	return (
		<header
			ref={headerRef}
			className={`${
				isOpen ? 'after:block' : 'after:hidden'
			} lg:flex justify-between bg-mainGray after:absolute after:bg-black after:opacity-20 after:w-full after:h-full after:top-0 after:left-0 after:z-40 xxl:after:hidden after:pointer-events-none`}
		>
			<div className='flex justify-between'>
				<a
					href='https://store.epicgames.com/en-US/'
					className='w-[52px] h-[52px] flex justify-center items-center'
				>
					<SiEpicgames size={35} color='white' opacity='.9' />
				</a>
				<Link to={HOME_ROUTE} className='lg:ml-8 flex items-center'>
					<img src={Logo} className='max-w-[120px] max-h-6' alt='logo' />
				</Link>
				<HeaderNav isOpen={isOpen} />
				<Burger isOpen={isOpen} onClick={toggleMenu} />
			</div>
			<HeaderControl className='hidden lg:flex' />
		</header>
	)
}

export default Header
