import React, { useState } from 'react'
import { DOWNLOAD_ROUTE } from '../utils/consts'
import Background from './Background'
import Button from './Button'
import HeroBackground from '../assets/videos/current-season-hero-background.mp4'
import HeroBackground2 from '../assets/images/hero-background.jpg'
import HeroImage from '../assets/images/hero-image.png'
import Overlay from '../assets/images/overlay.png'
import { FaPlay } from 'react-icons/fa'
import Heading from './Heading'

const CurrentSeasonHero = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<section className='relative -mb-[5vw] z-10 clipping-right after:absolute after:bottom-[2.48vw] after:right-0 after:bg-white after:h-[5px] after:w-full after:-rotate-[2.85deg]'>
			<div>
				<Background src={HeroBackground2} />
				<Background src={HeroBackground} video />
				<div
					className='absolute top-0 left-0 w-full h-full bg-repeat'
					style={{ background: `url(${Overlay})` }}
				></div>
			</div>
			<div className='relative z-10'>
				<div className='flex flex-col justify-center items-center pt-[5vw] pb-[10vw]'>
					<div className='max-w-[492px] min-w-[250px] px-9 pb-11 md:pb-16 -z-10'>
						<img
							src={HeroImage}
							className='max-w-full'
							alt='img'
							style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.5) 2px 2px 4px)' }}
						/>
					</div>
					<div className='flex flex-col mb-8'>
						<span className='uppercase text-white text-[22px] md:text-[34px] font-TitanOne leading-none text-center text-shadow'>
							season 1
						</span>
						<Heading
							text='free for all'
							className='text-[32px] sm:text-[44px] md:text-[89px]'
						/>
					</div>
					<div className='flex items-center gap-8'>
						<div
							className='flex items-center gap-5 cursor-pointer'
							onClick={() => setIsOpen(!isOpen)}
						>
							<span className='hidden md:inline uppercase text-white text-[22px] font-TitanOne text-shadow'>
								watch trailer
							</span>
							<div className='w-12 h-12 bg-black bg-opacity-50 flex justify-center items-center rounded-full border-white border-4'>
								<FaPlay color='white' />
							</div>
						</div>
						{/* <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden max-w-[1200px] max-h-[675px] w-full h-full z-50'>
							<iframe
								className='w-full h-full'
								src='https://www.youtube-nocookie.com/embed/Mj86wPhhj9M'
								title='YouTube video player'
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div> */}
						<Button to={DOWNLOAD_ROUTE} v1>
							play now!
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CurrentSeasonHero
