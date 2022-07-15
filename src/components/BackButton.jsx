import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

const BackButton = ({ onClick, className }) => {
	return (
		<a
			href='/'
			className={`leading-[65px] flex flex-auto items-center bg-[#313036] uppercase gap-1 text-[13px] font-OpenSans px-4 ${className}`}
			onClick={onClick}
		>
			<BsArrowLeftShort color='#60e9ff' size={28} />
			<span>back</span>
		</a>
	)
}

export default BackButton
