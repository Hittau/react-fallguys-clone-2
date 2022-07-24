import React from 'react'
import Background from './Background'
import TidingsBackground from '../assets/images/tidings-background.webp'
import Button from './Button'
import { NEWS_ROUTE } from '../utils/consts'
import TidingsSlider from '../components/TidingsSlider'

const Tidings = () => {
	return (
		<section className='relative -mb-[5vw] clipping-left after:absolute after:bottom-[2.48vw] after:right-0 after:bg-white after:h-[5px] after:w-full after:rotate-[2.85deg]'>
			<div className='xxl:max-w-[1200px] max-w-5xl mx-auto py-[10vw] px-8'>
				<Background src={TidingsBackground} />
				<div className='flex flex-col gap-12 xl:gap-0 xl:flex-row justify-between'>
					<div>
						<h2 className='uppercase text-white text-[34px] font-TitanOne leading-[0.9] text-shadow xl:max-w-[265px] mb-6'>
							the latest on fall guys in a nutshell
						</h2>
						<Button to={NEWS_ROUTE} v1>
							learn more
						</Button>
					</div>
					<TidingsSlider />
				</div>
			</div>
		</section>
	)
}

export default Tidings
