import React from 'react'

const Background = ({ src, video }) => {
	return (
		<div className='w-full h-full absolute left-0 top-0 pointer-events-none -z-10'>
			{video ? (
				<video className='w-full h-full object-cover' autoPlay loop muted>
					<source src={src} type='video/mp4' />
				</video>
			) : (
				<img
					src={src}
					className='w-full h-full object-cover'
					alt='background'
				/>
			)}
		</div>
	)
}

export default Background
