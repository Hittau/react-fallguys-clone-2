import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import SliderImage1 from '../assets/images/tidings-slider-image-1.jpeg'
import SliderImage2 from '../assets/images/tidings-slider-image-2.jpeg'
import SliderImage3 from '../assets/images/tidings-slider-image-3.jpeg'
import SliderImage4 from '../assets/images/tidings-slider-image-4.jpeg'
import SliderImage5 from '../assets/images/tidings-slider-image-5.jpeg'
import SliderImage6 from '../assets/images/tidings-slider-image-6.jpeg'
import SliderImage7 from '../assets/images/tidings-slider-image-7.jpeg'
import SliderImage8 from '../assets/images/tidings-slider-image-8.jpeg'
import SliderImage9 from '../assets/images/tidings-slider-image-9.jpeg'
import SliderImage10 from '../assets/images/tidings-slider-image-10.jpeg'
import SliderImage11 from '../assets/images/tidings-slider-image-11.jpeg'
import SliderImage12 from '../assets/images/tidings-slider-image-12.jpeg'
import SliderImage13 from '../assets/images/tidings-slider-image-13.jpeg'
import SliderImage14 from '../assets/images/tidings-slider-image-14.jpeg'
import SliderImage16 from '../assets/images/tidings-slider-image-16.jpeg'
import SliderImage17 from '../assets/images/tidings-slider-image-17.jpeg'
import SliderImage18 from '../assets/images/tidings-slider-image-18.jpeg'
import TidingsCard from './TidingsCard'

const sliderSlides = [
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage1,
		date: 'july 12, 2022',
		id: 'jd2l41',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage2,
		date: 'july 12, 2022',
		id: 'lzq42j',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage3,
		date: 'july 12, 2022',
		id: 'qmi2mx',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage4,
		date: 'july 12, 2022',
		id: 'kw5l27',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage5,
		date: 'july 12, 2022',
		id: '19vqk5',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage6,
		date: 'july 12, 2022',
		id: 'fj4mal',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage7,
		date: 'july 12, 2022',
		id: 'qj626m',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage8,
		date: 'july 12, 2022',
		id: 'ozg31m',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage9,
		date: 'july 12, 2022',
		id: '52mg1j',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage10,
		date: 'july 12, 2022',
		id: 'mqwj54',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage11,
		date: 'july 12, 2022',
		id: 'km53fm',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage12,
		date: 'july 12, 2022',
		id: 'fja13v',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage13,
		date: 'july 12, 2022',
		id: 'fas65n',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage14,
		date: 'july 12, 2022',
		id: 'afn3h5',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage16,
		date: 'july 12, 2022',
		id: 'twe42n',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage17,
		date: 'july 12, 2022',
		id: 'qnx543',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage18,
		date: 'july 12, 2022',
		id: '4m8h6k',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage5,
		date: 'july 12, 2022',
		id: 'qv432j',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage12,
		date: 'july 12, 2022',
		id: 'faj341',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage7,
		date: 'july 12, 2022',
		id: 'qut5gq',
	},
	{
		label: 'pawsome news! pusheen® pounces into fall guys!',
		image: SliderImage14,
		date: 'july 12, 2022',
		id: 'jfmq5b',
	},
]

const TidingsSlider = () => {
	return (
		<Swiper
			pagination={{
				type: 'progressbar',
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			slidesPerView={1}
			slidesPerGroup={1}
			grabCursor={true}
			lazy={true}
			preloadImages={false}
			breakpoints={{
				600: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},
				800: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
			}}
			loop={true}
			speed={600}
			className='mySwiper h-[450px] xxl:max-w-4xl xl:max-w-[784px] max-w-full'
		>
			{sliderSlides.map(({ label, image, date, id }) => (
				<SwiperSlide key={id} className='px-[10px] w-[calc(100%_-_20px)]'>
					<TidingsCard label={label} image={image} date={date} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default TidingsSlider
