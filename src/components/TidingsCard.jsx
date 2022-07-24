import React from 'react'

const TidingsCard = ({ label, image, date }) => {
	return (
		<div className='h-[350px] flex flex-col w-full cursor-pointer'>
			<div className='flex-auto'>
				<img
					src={image}
					className='relative rounded-lg mb-4 w-full outline-4 outline-offset-[-3px] outline-transparent hover:outline-white'
					style={{ outlineStyle: 'solid' }}
					alt='SliderImage'
				/>
				<h3 className='uppercase text-white font-TitanOne leading-[1.1] text-[17px] lg:text-[22px]'>
					{label}
				</h3>
			</div>
			<a href='/' className='capitalize font-Asap text-sm text-white'>
				team fall guys / {date}
			</a>
		</div>
	)
}

export default TidingsCard
