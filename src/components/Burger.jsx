import React from 'react'

const Burger = ({ isOpen, onClick }) => {
	return (
		<div
			className={`${
				isOpen ? 'bg-transparent' : 'bg-tahiti'
			} relative min-h-full w-11 sm:w-[60px] cursor-pointer lg:bg-transparent xxl:hidden transition-colors duration-300 z-50`}
			onClick={onClick}
		>
			<span
				className={`${
					isOpen ? 'rotate-45 top-6 bg-white' : 'top-4 bg-black'
				} absolute w-6 sm:w-[30px] h-[3px] lg:bg-white left-0 mx-[10px] sm:mx-[15px] rounded-sm transition-all duration-300`}
			></span>
			<span
				className={`${
					isOpen ? 'scale-0' : 'scale-100'
				} absolute w-6 sm:w-[30px] h-[3px] bg-black lg:bg-white left-0 my-6 mx-[10px] sm:mx-[15px] rounded-sm transition-all duration-300`}
			></span>
			<span
				className={`${
					isOpen ? '-rotate-45 bottom-6 bg-white' : 'bottom-4 bg-black'
				} absolute w-6 sm:w-[30px] h-[3px] lg:bg-white left-0 mx-[10px] sm:mx-[15px] rounded-sm transition-all duration-300`}
			></span>
		</div>
	)
}

export default Burger
