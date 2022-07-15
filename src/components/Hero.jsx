import React from 'react'
import HeroBackground from '../assets/images/hero-background.jpg'
import DownloadBanner from './DownloadBanner'
import HeroImage from '../assets/images/hero-image.png'
import { DOWNLOAD_ROUTE } from '../utils/consts'
import Button from './Button'
import Background from './Background'

const Hero = () => {
	return (
		<section className='relative -mb-[5vw] z-10 clipping-right'>
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
			{/* <div
				className='relative -mt-[5vw]'
				style={{
					clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 5vw), 0% 100%)',
				}}
			>
				<div className='h-[calc(5vw_+_5px)] bg-white'></div>
			</div> */}
			{/* <div className='absolute bottom-[calc(7.5vw_-_10%)] bg-white h-1 w-full -rotate-[2.9deg]'></div> */}
		</section>
	)
}

export default Hero
