import React from 'react'
import {
	SiTwitter,
	SiInstagram,
	SiYoutube,
	SiTiktok,
	SiTwitch,
} from 'react-icons/si'
import { GrFacebook } from 'react-icons/gr'
import {
	DISCORD_ROUTE,
	FACEBOOK_ROUTE,
	INSTAGRAM_ROUTE,
	TIKTOK_ROUTE,
	TWITCH_ROUTE,
	TWITTER_ROUTE,
	YOUTUBE_ROUTE,
} from '../utils/consts'
import FooterSocialMediaItem from './FooterSocialMediaItem'
import { BsDiscord } from 'react-icons/bs'

const footerSocialMediaIconClassName =
	'text-white opacity-80 hover:opacity-100 hover:text-tahiti transition-all ease-out duration-300'

const footerSocialMedia = [
	{
		path: TWITTER_ROUTE,
		icon: <SiTwitter className={footerSocialMediaIconClassName} size={32} />,
	},
	{
		path: INSTAGRAM_ROUTE,
		icon: <SiInstagram className={footerSocialMediaIconClassName} size={32} />,
	},
	{
		path: YOUTUBE_ROUTE,
		icon: <SiYoutube className={footerSocialMediaIconClassName} size={32} />,
	},
	{
		path: TIKTOK_ROUTE,
		icon: <SiTiktok className={footerSocialMediaIconClassName} size={32} />,
	},
	{
		path: TWITCH_ROUTE,
		icon: <SiTwitch className={footerSocialMediaIconClassName} size={32} />,
	},
	{
		path: DISCORD_ROUTE,
		icon: <BsDiscord className={footerSocialMediaIconClassName} size={32} />,
	},
	{
		path: FACEBOOK_ROUTE,
		icon: <GrFacebook className={footerSocialMediaIconClassName} size={32} />,
	},
]

const FooterSocialMediaItems = () => {
	return (
		<ul className='flex flex-wrap gap-2 sm:gap-[14px]'>
			{footerSocialMedia.map(({ path, icon }) => (
				<FooterSocialMediaItem key={path} path={path} icon={icon} />
			))}
		</ul>
	)
}

export default FooterSocialMediaItems
