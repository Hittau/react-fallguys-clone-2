import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ to, children: label, v1 }) => {
	return (
		<Link
			to={to}
			className={`${
				v1
					? 'text-white bg-[#a643fa] border-white'
					: 'text-[#a643fa] bg-white border-[#a643fa]'
			} relative flex justify-center items-center uppercase  text-[17px] font-TitanOne py-3 px-6 h-[50px] max-w-max min-w-[155px] rounded-[30px] border-4   whitespace-nowrap after:absolute after:w-[calc(100%_+_8px)] after:h-[calc(100%_+_8px)] after:bg-white after:rounded-[30px] after:opacity-0 hover:after:opacity-30 shadow-button`}
		>
			{label}
		</Link>
	)
}

export default Button
