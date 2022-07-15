import React from 'react'
import { Link } from 'react-router-dom'
import { DOWNLOAD_ROUTE } from '../utils/consts'

const DownloadButton = () => {
	return (
		<Link
			to={DOWNLOAD_ROUTE}
			className='uppercase text-black font-OpenSans text-[11px] tracking-[0.125rem] flex items-center bg-tahiti lg:px-4 lg:ml-4 order-3 lg:order-none w-full leading-[52px] lg:leading-none lg:w-auto justify-center'
		>
			download
		</Link>
	)
}

export default DownloadButton
