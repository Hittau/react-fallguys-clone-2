import React from 'react'
import Background from './Background'
import DescriptionBackground from '../assets/images/description-background.jpg'
import DescriptionImage from '../assets/images/description-image.png'
import Button from './Button'
import { CURRENT_SEASON_ROUTE, DOWNLOAD_ROUTE } from '../utils/consts'

const Description = () => {
	return (
		<section className='relative -mb-[5vw]'>
			<div className='max-w-[1200px] mx-auto py-[10vw] px-8'>
				<Background src={DescriptionBackground} />
				<div className='flex flex-col md:flex-row justify-center items-center gap-6'>
					<img
						src={DescriptionImage}
						className='animate-levitation flex-auto w-full max-w-[588px]'
						alt='DescriptionImg'
					/>
					<div className='md:max-w-md text-center md:text-left'>
						<h2 className='uppercase text-[#fed530] text-shadow font-TitanOne text-[22px] sm:text-[28px] leading-[1.1]'>
							fall guys
						</h2>
						<h1 className='uppercase text-white text-shadow font-TitanOne text-[34px] sm:text-[44px] leading-none'>
							free for all
						</h1>
						<p className='text-white text-shadow font-Asap text-[23px] leading-[1.4] font-bold py-6'>
							Welcome to Fall Guys: Free for All! You’re invited to dive and
							dodge your way to victory in the pantheon of clumsy. Rookie or
							pro? Solo or partied up? Fall Guys delivers ever-evolving,
							high-concentrated hilarity and fun!
						</p>
						<div className='flex items-center flex-col md:flex-row gap-4'>
							<Button v2 to={CURRENT_SEASON_ROUTE}>
								learn more
							</Button>
							<Button v1 to={DOWNLOAD_ROUTE}>
								play now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Description
