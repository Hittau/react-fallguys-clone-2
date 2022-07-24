import React from 'react'

const FooterPlayingPlatformItem = ({ path, icon }) => {
	return (
		<li>
			<a href={path}>{icon}</a>
		</li>
	)
}

export default FooterPlayingPlatformItem
