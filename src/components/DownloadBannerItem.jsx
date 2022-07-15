import React from 'react'

const DownloadBannerItem = ({ icon, path }) => {
	return (
		<li>
			<a
				href={path}
				className='bg-white flex justify-center items-center w-[40px] h-[40px] rounded-[4px] opacity-80 hover:opacity-100'
			>
				{icon}
			</a>
		</li>
	)
}

export default DownloadBannerItem
