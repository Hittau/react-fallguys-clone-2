import React from 'react'
import AuthButton from './AuthButton'
import DownloadButton from './DownloadButton'
import SelectLanguage from './SelectLanguage'

const HeaderControl = ({ className }) => {
	return (
		<div
			className={`${className} flex flex-wrap lg:flex-nowrap border-t-[1px] border-[#404040] lg:border-t-0`}
		>
			<SelectLanguage />
			<AuthButton />
			<DownloadButton />
		</div>
	)
}

export default HeaderControl
