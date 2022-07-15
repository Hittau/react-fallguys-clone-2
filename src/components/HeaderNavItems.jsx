import React from 'react'
import {
	CURRENT_SEASON_ROUTE,
	HOME_ROUTE,
	NEWS_ROUTE,
	SEASON_ARCHIVE_ROUTE,
	SEASON_PASS_ROUTE,
} from '../utils/consts'
import HeaderNavItem from './HeaderNavItem'

const navItems = [
	{
		label: 'current season',
		path: CURRENT_SEASON_ROUTE,
	},
	{
		label: 'previous seasons',
		path: SEASON_ARCHIVE_ROUTE,
	},
	{
		label: 'news',
		path: NEWS_ROUTE,
	},
	{
		label: 'season pass',
		path: SEASON_PASS_ROUTE,
	},
	{
		label: 'merch',
		path: HOME_ROUTE,
	},
]

const HeaderNavItems = () => {
	return (
		<div className='flex flex-col xxl:flex-row divide-[#404040] divide-y-[1px] xxl:w-auto xxl:divide-y-0 flex-auto'>
			{navItems.map(({ label, path }) => (
				<HeaderNavItem key={path} label={label} path={path} />
			))}
		</div>
	)
}

export default HeaderNavItems
