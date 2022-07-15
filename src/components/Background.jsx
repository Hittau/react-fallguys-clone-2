import React from 'react'

const Background = ({ src }) => {
	return (
		<div className='w-full h-full absolute left-0 top-0 pointer-events-none -z-10'>
			<img src={src} className='w-full h-full object-cover' alt='background' />
		</div>
	)
}

export default Background
