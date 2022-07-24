import React from 'react'

const FooterSocialMediaItem = ({ path, icon }) => {
	return (
		<li>
			<a href={path} target='blank'>
				{icon}
			</a>
		</li>
	)
}

export default FooterSocialMediaItem
