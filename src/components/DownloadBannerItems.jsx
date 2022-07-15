import React from 'react'
import {
	SiEpicgames,
	SiPlaystation,
	SiNintendoswitch,
	SiXbox,
} from 'react-icons/si'
import {
	EPIC_GAMES_DOWNLOAD_ROUTE,
	NINTENDO_SWITCH_DOWNLOAD_ROUTE,
	PLAYSTATION_DOWNLOAD_ROUTE,
	XBOX_DOWNLOAD_ROUTE,
} from '../utils/consts'
import DownloadBannerItem from './DownloadBannerItem'

const downloadBannerItems = [
	{
		icon: <SiEpicgames color='#a643fa' size={20} />,
		path: EPIC_GAMES_DOWNLOAD_ROUTE,
	},
	{
		icon: (
			<SiPlaystation
				color='white'
				size={22}
				className='bg-[#a643fa] p-1 rounded-full'
			/>
		),
		path: PLAYSTATION_DOWNLOAD_ROUTE,
	},
	{
		icon: <SiNintendoswitch color='#a643fa' size={22} />,
		path: NINTENDO_SWITCH_DOWNLOAD_ROUTE,
	},
	{
		icon: <SiXbox color='#a643fa' size={22} />,
		path: XBOX_DOWNLOAD_ROUTE,
	},
]

const DownloadBannerItems = () => {
	return (
		<ul className='flex gap-[10px]'>
			{downloadBannerItems.map(({ icon, path }) => (
				<DownloadBannerItem key={path} icon={icon} path={path} />
			))}
		</ul>
	)
}

export default DownloadBannerItems
