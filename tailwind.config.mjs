/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                'noto': ['"Noto Sans"', 'sans-serif'],
            },
            colors: {
                'deep-blue': '#626d88',
                'off-white': '#D6EEFF'
            }
        },
	},
	plugins: [],
}
