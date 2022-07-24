import React from 'react'
import Description from '../components/Description'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Tidings from '../components/Tidings'

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Tidings />
			<Description />
			<Footer />
		</>
	)
}

export default Home
