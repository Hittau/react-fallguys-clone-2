import React from 'react'
import ZeroPlus from '../assets/images/zero-plus.png'
import FooterSocialMediaItems from './FooterSocialMediaItems'
import FooterScrollTopButton from './FooterScrollTopButton'
import FooterNavItems from './FooterNavItems'
import FooterUserAgreementItems from './FooterUserAgreementItems'
import FooterPlayingPlatformsItems from './FooterPlayingPlatformsItems'

const Footer = () => {
	return (
		<footer className='mt-[5vw] bg-[#1b191e]'>
			<div className='max-w-[1456px] py-14 px-4 mx-auto'>
				<div className='flex justify-between gap-8 pb-16'>
					<FooterSocialMediaItems />
					<FooterScrollTopButton />
				</div>
				<div className='flex flex-col items-center sm:flex-row justify-between gap-10'>
					<FooterNavItems />
					<div className='flex flex-col items-center gap-1'>
						<span className='uppercase text-tahiti text-[9px] tracking-[0.188em]'>
							russia
						</span>
						<img src={ZeroPlus} className='w-20' alt='img' />
					</div>
				</div>
				<hr className='my-10 border-[#404040]' />
				<div className='max-w-4xl pb-4'>
					<span className='text-[#d8dee3] text-xs font-OpenSans tracking-[0.013em]'>
						© 2022 Mediatonic Limited. All rights reserved. The Mediatonic logo
						and Fall Guys logo and characters are trademarks of Mediatonic
						Limited. The Epic Games logo is a trademark or registered trademark
						of Epic Games, Inc. in the US and elsewhere.
					</span>
				</div>
				<div className='flex flex-col sm:flex-row justify-between items-center'>
					<FooterUserAgreementItems />
					<FooterPlayingPlatformsItems />
				</div>
			</div>
		</footer>
	)
}

export default Footer
