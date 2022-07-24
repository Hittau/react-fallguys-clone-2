import React from 'react'
import {
	CURRENT_SEASON_ROUTE,
	DOWNLOAD_ROUTE,
	HOME_ROUTE,
	NEWS_ROUTE,
	RULES_AND_GUIDELINES_ROUTE,
	SEASON_ARCHIVE_ROUTE,
	SEASON_PASS_ROUTE,
} from '../utils/consts'
import FooterNavItem from './FooterNavItem'

const footerNavItems = [
	{
		path: HOME_ROUTE,
		label: 'home',
	},
	{
		path: NEWS_ROUTE,
		label: 'news',
	},
	{
		path: CURRENT_SEASON_ROUTE,
		label: 'current season',
	},
	{
		path: DOWNLOAD_ROUTE,
		label: 'download now',
	},
	{
		path: SEASON_ARCHIVE_ROUTE,
		label: 'previous seasons',
	},
	{
		path: '',
		label: 'support',
	},
	{
		path: SEASON_PASS_ROUTE,
		label: 'season pass',
	},
	{
		path: RULES_AND_GUIDELINES_ROUTE,
		label: 'rules and guidelines',
	},
]

const FooterNavItems = () => {
	return (
		<ul
			className='capitalize whitespace-nowrap text-white text-sm font-OpenSans tracking-[0.013em] grid gap-y-[10px] gap-x-15 w-full max-w-sm'
			style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}
		>
			{footerNavItems.map(({ path, label }) => (
				<FooterNavItem key={path} path={path} label={label} />
			))}
		</ul>
	)
}

export default FooterNavItems
