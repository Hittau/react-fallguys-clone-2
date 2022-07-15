import React from 'react'
import DownloadBannerItems from './DownloadBannerItems'

const DownloadBanner = () => {
	return (
		<div
			className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-7 w-full min-h-[75px] max-h-full p-4'
			style={{
				background:
					'linear-gradient(270deg, rgb(166, 67, 250) 0%, rgb(103, 19, 236) 100%)',
			}}
		>
			<span className='uppercase text-white text-[22px] font-TitanOne whitespace-nowrap leading-none'>
				download now!
			</span>
			<DownloadBannerItems />
		</div>
	)
}

export default DownloadBanner
