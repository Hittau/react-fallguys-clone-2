import React from 'react'
import FooterUserAgreementItem from './FooterUserAgreementItem'
import {
	EULA_ROUTE,
	PRIVACY_POLICY_ROUTE,
	TERMS_OF_SERVICE_ROUTE,
} from '../utils/consts'

const footerUserAgreementItems = [
	{
		path: TERMS_OF_SERVICE_ROUTE,
		label: 'Terms of service',
	},
	{
		path: PRIVACY_POLICY_ROUTE,
		label: 'Privacy policy',
	},
	{
		path: EULA_ROUTE,
		label: 'EULA',
	},
]

const FooterUserAgreementItems = () => {
	return (
		<ul className='flex flex-col sm:flex-row text-white text-sm font-OpenSans text-center sm:text-start gap-2 sm:gap-6 py-6 sm:py-0'>
			{footerUserAgreementItems.map(({ path, label }) => (
				<FooterUserAgreementItem key={path} path={path} label={label} />
			))}
		</ul>
	)
}

export default FooterUserAgreementItems
