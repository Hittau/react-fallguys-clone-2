import React from 'react'
import BackButton from './BackButton'

const selectLanguageMenuItems = [
	{
		label: 'العربية',
	},
	{
		label: 'Deutsch',
	},
	{
		label: 'Español (Spain)',
	},
	{
		label: 'Español (LA)',
	},
	{
		label: 'Français',
	},
	{
		label: 'Italiano',
	},
	{
		label: '日本語',
	},
	{
		label: '한국어',
	},
	{
		label: 'Polski',
	},
	{
		label: 'Português (Brasil)',
	},
	{
		label: 'Русский',
	},
	{
		label: 'Türkçe',
	},
	{
		label: '简体中文',
	},
]

const SelectLanguageMenu = ({ isOpen, setIsOpen }) => {
	const closeLanguageMenu = e => {
		e.preventDefault()
		setIsOpen(!isOpen)
	}

	return (
		<ul
			className={`${
				isOpen
					? 'left-1/2 -translate-x-1/2'
					: 'left-full lg:left-1/2 lg:-translate-x-1/2'
			} absolute top-0 divide-y-[1px] divide-[#404040] lg:divide-y-0 w-full h-full lg:top-[52px] lg:px-2 lg:pb-2 bg-mainGray text-white lg:w-[196px] lg:h-auto lg:invisible lg:group-hover:visible transition-all duration-300`}
		>
			<BackButton className='lg:hidden' onClick={closeLanguageMenu} />
			{selectLanguageMenuItems.map(({ label }) => (
				<li
					key={label}
					className='text-center lg:uppercase text-white text-base lg:font-OpenSans font-OpenSansV2 lg:text-[12px] leading-8 tracking-[0.066rem] hover:text-tahiti whitespace-nowrap'
				>
					<a href='/' className='py-2 px-12 lg:px-4 flex lg:inline'>
						{label}
					</a>
				</li>
			))}
		</ul>
	)
}

export default SelectLanguageMenu
