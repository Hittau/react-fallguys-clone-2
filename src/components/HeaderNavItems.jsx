import React, { useState } from 'react'
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
		path: CURRENT_SEASON_ROUTE,
		label: 'current season',
	},
	{
		path: SEASON_ARCHIVE_ROUTE,
		label: 'previous seasons',
	},
	{
		path: NEWS_ROUTE,
		label: 'news',
	},
	{
		path: SEASON_PASS_ROUTE,
		label: 'season pass',
	},
	{
		path: HOME_ROUTE,
		label: 'merch',
	},
]

const HeaderNavItems = () => {
	return (
		<div className='flex flex-col xxl:flex-row divide-[#404040] divide-y-[1px] xxl:w-auto xxl:divide-y-0 flex-auto'>
			{navItems.map(({ path, label }) => (
				<HeaderNavItem key={path} label={label} path={path} />
			))}
		</div>
	)
}

export default HeaderNavItems
