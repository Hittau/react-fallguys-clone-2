import React from 'react'
import { BsArrowUpShort } from 'react-icons/bs'

const scrollTop = () => {
	let top = Math.max(
		document.body.scrollTop,
		document.documentElement.scrollTop
	)
	if (top > 0) {
		window.scrollBy(0, -20)
		setTimeout(scrollTop, 5)
	}
	return false
}

const FooterScrollTopButton = () => {
	return (
		<button
			onClick={scrollTop}
			className='flex items-center gap-2 h-full group'
		>
			<BsArrowUpShort className='w-[36px] sm:w-[22px] h-[36px] sm:h-[22px] text-white group-hover:text-tahiti group-hover:-translate-y-[2px] group-hover:border-tahiti transition-all ease-out duration-300 border-[1px] border-white sm:border-0' />
			<span className='hidden sm:inline uppercase text-white text-[13px] font-OpenSans font-semibold tracking-[0.125em] group-hover:text-tahiti transition-colors ease-out duration-300'>
				back to top
			</span>
		</button>
	)
}

export default FooterScrollTopButton
