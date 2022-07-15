import React, { useState } from 'react'
import SelectLanguageMenu from './SelectLanguageMenu'
import { MdLanguage } from 'react-icons/md'

const SelectLanguage = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='lg:relative flex flex-auto min-w-[52px] max-w-[104px] items-center lg:px-3 group order-2 lg:order-none leading-[53px] lg:leading-none justify-center z-40'>
			<MdLanguage
				size={22}
				color='white'
				opacity='0.7'
				style={{ width: '100%' }}
				onClick={() => setIsOpen(!isOpen)}
			/>
			<SelectLanguageMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}

export default SelectLanguage
