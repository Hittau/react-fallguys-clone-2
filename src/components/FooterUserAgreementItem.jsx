import React from 'react'

const FooterUserAgreementItem = ({ path, label }) => {
	return (
		<li className='hover:text-tahiti transition-colors ease-out duration-300'>
			<a href={path}>{label}</a>
		</li>
	)
}

export default FooterUserAgreementItem
