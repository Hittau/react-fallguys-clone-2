import React from 'react'

const Heading = ({ text, className }) => {
	return (
		<h1
			after={text}
			className={`${className} relative w-max uppercase text-white font-TitanOne leading-[1.15] text-center whitespace-nowrap after:content-[attr(after)] after:absolute after:left-0 after-text-stroke after:-z-10 before:content-[attr(after)] before:text-black before:text-opacity-25 before:absolute before:-z-20 before:top-2 before:left-2`}
		>
			{text}
		</h1>
	)
}

export default Heading
