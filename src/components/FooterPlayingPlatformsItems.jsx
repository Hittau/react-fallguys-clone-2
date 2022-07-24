import React from 'react'
import {
	EPIC_GAMES_DOWNLOAD_ROUTE,
	NINTENDO_SWITCH_DOWNLOAD_ROUTE,
	PLAYSTATION_DOWNLOAD_ROUTE,
	XBOX_DOWNLOAD_ROUTE,
} from '../utils/consts'
import {
	SiEpicgames,
	SiPlaystation,
	SiNintendoswitch,
	SiXbox,
} from 'react-icons/si'
import FooterPlayingPlatformItem from './FooterPlayingPlatformItem'

const footerPlayingPlatformsItemClassName =
	'text-white hover:text-tahiti transition-colors ease-out duration-300'

const footerPlayingPlatformsItems = [
	{
		path: EPIC_GAMES_DOWNLOAD_ROUTE,
		icon: (
			<SiEpicgames size={36} className={footerPlayingPlatformsItemClassName} />
		),
	},
	{
		path: PLAYSTATION_DOWNLOAD_ROUTE,
		icon: (
			<SiPlaystation
				size={42}
				className={footerPlayingPlatformsItemClassName}
			/>
		),
	},
	{
		path: NINTENDO_SWITCH_DOWNLOAD_ROUTE,
		icon: (
			<SiNintendoswitch
				size={36}
				className={footerPlayingPlatformsItemClassName}
			/>
		),
	},
	{
		path: XBOX_DOWNLOAD_ROUTE,
		icon: <SiXbox size={36} className={footerPlayingPlatformsItemClassName} />,
	},
]

const FooterPlayingPlatformsItems = () => {
	return (
		<ul className='flex flex-wrap gap-4 items-center'>
			{footerPlayingPlatformsItems.map(({ path, icon }) => (
				<FooterPlayingPlatformItem key={path} path={path} icon={icon} />
			))}
		</ul>
	)
}

export default FooterPlayingPlatformsItems
