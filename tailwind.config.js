module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				tahiti: '#60e9ff',
				mainGray: '#1b191e',
			},
			fontFamily: {
				OpenSans: ['"Graphik LCG Web", OpenSans, sans-serif, arial'],
				OpenSansV2: ['"Graphik LCG Web", Brutal_Regular, "Open Sans", arial'],
				TitanOne: ['"Titan One"'],
				Asap: ['"Asap", sans-serif'],
			},
			boxShadow: {
				'3xl': '0px -1px 15px 1px rgba(0, 0, 0, 0.4)',
				button: 'rgb(0 0 0 / 25%) 2px 2px 4px',
			},
			keyframes: {
				levitation: {
					'0%': { transform: 'translateY(-12px)' },
					'100%': { transform: 'translateY(12px)' },
				},
			},
			animation: {
				levitation: 'levitation 3s ease-in-out infinite alternate',
			},
		},
		screens: {
			xs: '375px',
			sm: '600px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
			xxl: '1280px',
		},
	},
	plugins: [],
}
