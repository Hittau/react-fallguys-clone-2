import React from 'react'
import { HiUserAdd } from 'react-icons/hi'

const AuthButton = () => {
	return (
		<div className='flex flex-auto items-center max-w-full lg:px-3 order-1 lg:order-none leading-[53px] lg:leading-none justify-center border-r-[1px] border-[#404040] lg:border-r-0'>
			<a
				href='https://www.epicgames.com/id/login'
				className='flex justify-center items-center w-full h-full gap-1'
			>
				<HiUserAdd size={20} color='white' />
				<span className='uppercase text-white font-OpenSans text-[11px] tracking-[0.066rem]'>
					account
				</span>
			</a>
		</div>
	)
}

export default AuthButton
