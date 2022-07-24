import React from 'react'
import HeroBackground from '../assets/images/hero-background.jpg'
import DownloadBanner from './DownloadBanner'
import HeroImage from '../assets/images/hero-image.png'
import { DOWNLOAD_ROUTE } from '../utils/consts'
import Button from './Button'
import Background from './Background'

const Hero = () => {
	return (
		<section className='relative -mb-[5vw] z-10 clipping-right after:absolute after:bottom-[2.48vw] after:right-0 after:bg-white after:h-[5px] after:w-full after:-rotate-[2.85deg]'>
			<Background src={HeroBackground} />
			<div className='relative'>
				<DownloadBanner />
				<div className='flex flex-col justify-center items-center pt-[5vw] pb-[10vw]'>
					<div className='max-w-[562px] min-w-[250px] px-9 pb-16 -z-10'>
						<img
							src={HeroImage}
							className='max-w-full'
							alt='img'
							style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.5) 2px 2px 4px)' }}
						/>
					</div>
					<Button to={DOWNLOAD_ROUTE} v1>
						download now
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Hero
