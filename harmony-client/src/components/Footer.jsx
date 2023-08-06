import { Quicksand } from "next/font/google"
import Link from "next/link"

const quicksand = Quicksand({ subsets: ["latin"], weight: ["700"] })

export default function Footer() {
	return (
		<footer
			id="footer"
			className="gap-8 flex flex-col items-center justify-center bg-[#1A202C] w-full py-14"
		>
			{/* Page Links */}
			<div className="flex flex-col items-center">
				<h1 className={`${quicksand.className} text-lime-400 text-3xl`}>
					Harmony
				</h1>
				<section className="flex gap-6 text-white font-sans select-none">
					<Link href="#">About</Link>
					<Link href="#">Forum</Link>
					<Link href="#">Library</Link>
					<Link href="#">AI Doctor</Link>
					<Link href="#">Minigames</Link>
				</section>
			</div>

			{/* Contact Links */}
			<div className="flex flex-col items-center gap-3">
				<h1 className={`${quicksand.className} text-[#A3B2CD] text-xl`}>
					Stay in touch
				</h1>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="255"
					height="27"
					viewBox="0 0 255 27"
					fill="none"
				>
					<path
						className="hover:cursor-pointer"
						d="M23.6905 0H2.84286C2.08888 0 1.36579 0.299514 0.832653 0.832653C0.299514 1.36579 0 2.08888 0 2.84286L0 23.6905C0 24.4444 0.299514 25.1675 0.832653 25.7007C1.36579 26.2338 2.08888 26.5333 2.84286 26.5333H10.9716V17.5126H7.2404V13.2667H10.9716V10.0305C10.9716 6.34964 13.163 4.3164 16.5194 4.3164C18.1268 4.3164 19.8076 4.60306 19.8076 4.60306V8.21585H17.9556C16.1308 8.21585 15.5617 9.34826 15.5617 10.5097V13.2667H19.6353L18.9838 17.5126H15.5617V26.5333H23.6905C24.4444 26.5333 25.1675 26.2338 25.7007 25.7007C26.2338 25.1675 26.5333 24.4444 26.5333 23.6905V2.84286C26.5333 2.08888 26.2338 1.36579 25.7007 0.832653C25.1675 0.299514 24.4444 0 23.6905 0Z"
						fill="white"
					/>
					<path
						d="M194.69 0H173.843C172.273 0 171 1.27336 171 2.84286V23.6905C171 25.26 172.273 26.5333 173.843 26.5333H194.69C196.26 26.5333 197.533 25.26 197.533 23.6905V2.84286C197.533 1.27336 196.26 0 194.69 0ZM191.794 9.40512C191.806 9.57095 191.806 9.7427 191.806 9.90854C191.806 15.0434 187.897 20.9601 180.755 20.9601C178.551 20.9601 176.508 20.3205 174.79 19.2189C175.104 19.2544 175.406 19.2663 175.726 19.2663C177.544 19.2663 179.215 18.6503 180.547 17.6079C178.842 17.5724 177.408 16.453 176.917 14.9131C177.515 15.002 178.054 15.002 178.67 14.8421C176.893 14.4808 175.56 12.9172 175.56 11.0279V10.9805C176.076 11.2707 176.68 11.4484 177.314 11.4721C176.781 11.1177 176.344 10.6369 176.042 10.0727C175.74 9.50843 175.583 8.87824 175.584 8.23836C175.584 7.5158 175.774 6.85247 176.111 6.27797C178.024 8.63517 180.897 10.1751 184.119 10.3409C183.568 7.70532 185.54 5.56726 187.909 5.56726C189.028 5.56726 190.035 6.03515 190.746 6.79324C191.623 6.62741 192.464 6.30166 193.21 5.85747C192.92 6.75771 192.31 7.5158 191.504 7.99553C192.286 7.91262 193.044 7.69348 193.743 7.39143C193.216 8.16729 192.552 8.85431 191.794 9.40512Z"
						fill="white"
					/>
					<path
						d="M70.2696 6.46241C66.5049 6.46241 63.4683 9.49902 63.4683 13.2637C63.4683 17.0284 66.5049 20.065 70.2696 20.065C74.0343 20.065 77.0709 17.0284 77.0709 13.2637C77.0709 9.49902 74.0343 6.46241 70.2696 6.46241ZM70.2696 17.6854C67.8368 17.6854 65.8479 15.7025 65.8479 13.2637C65.8479 10.8249 67.8309 8.84197 70.2696 8.84197C72.7084 8.84197 74.6913 10.8249 74.6913 13.2637C74.6913 15.7025 72.7025 17.6854 70.2696 17.6854ZM78.9355 6.1842C78.9355 7.06618 78.2252 7.77058 77.3491 7.77058C76.4671 7.77058 75.7627 7.06026 75.7627 6.1842C75.7627 5.30814 76.4731 4.59783 77.3491 4.59783C78.2252 4.59783 78.9355 5.30814 78.9355 6.1842ZM83.4401 7.79426C83.3395 5.66922 82.8541 3.78688 81.2973 2.23602C79.7464 0.68516 77.8641 0.199777 75.7391 0.0932292C73.5489 -0.0310764 66.9844 -0.0310764 64.7943 0.0932292C62.6751 0.193858 60.7928 0.679241 59.236 2.2301C57.6792 3.78096 57.1998 5.6633 57.0932 7.78834C56.9689 9.97848 56.9689 16.543 57.0932 18.7331C57.1939 20.8582 57.6792 22.7405 59.236 24.2914C60.7928 25.8422 62.6692 26.3276 64.7943 26.4342C66.9844 26.5585 73.5489 26.5585 75.7391 26.4342C77.8641 26.3335 79.7464 25.8482 81.2973 24.2914C82.8482 22.7405 83.3335 20.8582 83.4401 18.7331C83.5644 16.543 83.5644 9.9844 83.4401 7.79426ZM80.6107 21.0831C80.149 22.2433 79.2551 23.1371 78.089 23.6047C76.3428 24.2973 72.1993 24.1375 70.2696 24.1375C68.3399 24.1375 64.1905 24.2914 62.4502 23.6047C61.29 23.143 60.3962 22.2492 59.9286 21.0831C59.236 19.3369 59.3958 15.1934 59.3958 13.2637C59.3958 11.334 59.2419 7.18457 59.9286 5.44429C60.3903 4.2841 61.2841 3.39029 62.4502 2.92266C64.1964 2.2301 68.3399 2.38992 70.2696 2.38992C72.1993 2.38992 76.3488 2.23602 78.089 2.92266C79.2492 3.38437 80.143 4.27818 80.6107 5.44429C81.3032 7.19049 81.1434 11.334 81.1434 13.2637C81.1434 15.1934 81.3032 19.3428 80.6107 21.0831Z"
						fill="white"
					/>
					<path
						d="M140.031 9.57114C140.233 9.41049 140.533 9.56078 140.533 9.81471V20.4125C140.533 21.7858 139.419 22.9 138.046 22.9H116.487C115.114 22.9 114 21.7858 114 20.4125V9.81989C114 9.56078 114.295 9.41567 114.503 9.57632C115.664 10.478 117.203 11.6233 122.489 15.4634C123.582 16.2615 125.427 17.9405 127.267 17.9302C129.117 17.9457 130.998 16.2304 132.05 15.4634C137.336 11.6233 138.87 10.4729 140.031 9.57114ZM127.267 16.2667C128.469 16.2874 130.2 14.7534 131.07 14.1212C137.947 9.13065 138.471 8.69534 140.057 7.45159C140.357 7.21838 140.533 6.85562 140.533 6.47213V5.4875C140.533 4.11419 139.419 3 138.046 3H116.487C115.114 3 114 4.11419 114 5.4875V6.47213C114 6.85562 114.176 7.2132 114.477 7.45159C116.063 8.69015 116.586 9.13065 123.463 14.1212C124.333 14.7534 126.064 16.2874 127.267 16.2667Z"
						fill="white"
					/>
					<path
						d="M245.461 14.2877C245.461 15.2051 244.784 15.9571 243.927 15.9571C243.085 15.9571 242.393 15.2051 242.393 14.2877C242.393 13.3703 243.07 12.6183 243.927 12.6183C244.784 12.6183 245.461 13.3703 245.461 14.2877ZM238.438 12.6183C237.58 12.6183 236.903 13.3703 236.903 14.2877C236.903 15.2051 237.595 15.9571 238.438 15.9571C239.295 15.9571 239.972 15.2051 239.972 14.2877C239.987 13.3703 239.295 12.6183 238.438 12.6183ZM254.319 3.09817L254.176 21.6671C254.156 24.3588 251.968 26.53 249.276 26.53H248.138H231.083C229.384 26.53 228 25.1463 228 23.4318V3.09817C228 1.38365 229.384 0 231.083 0H251.236C252.936 0 254.319 1.38365 254.319 3.09817ZM248.671 18.6764C249.718 17.9912 250.064 16.6918 249.925 15.4483C249.667 13.1409 249.002 11.1756 248.497 9.94755C248.12 9.03249 247.477 8.24063 246.592 7.79778C245.179 7.09017 244.003 7.01616 243.711 7.00907C243.666 7.00798 243.624 7.02787 243.595 7.06189C243.518 7.14978 243.557 7.28787 243.668 7.32394C243.817 7.37246 243.962 7.42208 244.101 7.47247C244.605 7.65453 244.409 8.04129 243.886 7.92618C241.19 7.33344 238.384 7.64987 235.941 8.72302C235.803 8.78648 235.719 8.65416 235.847 8.57248C236.464 8.17929 237.45 7.65896 238.835 7.24052C238.916 7.21582 238.948 7.11543 238.893 7.04985C238.871 7.02357 238.839 7.00811 238.805 7.00873C238.541 7.01357 237.332 7.07735 235.878 7.81241C235.014 8.24915 234.385 9.0232 234.015 9.91792C233.507 11.1492 232.829 13.1394 232.572 15.4786C232.437 16.703 232.774 17.9819 233.8 18.6631C234.463 19.1034 235.397 19.5111 236.652 19.6184C236.904 19.64 237.148 19.5274 237.308 19.331C237.387 19.2336 237.48 19.1192 237.579 18.9965C237.812 18.7084 237.675 18.2767 237.337 18.1256C236.671 17.828 236.202 17.4639 235.896 17.1683C235.776 17.0529 235.908 16.9027 236.046 16.9948C238.585 18.4164 242.191 18.8822 245.431 17.5212C245.868 17.359 246.112 17.6755 245.705 17.9035C245.557 17.9863 245.397 18.0669 245.224 18.143C244.86 18.3026 244.71 18.7659 244.962 19.0734C245.043 19.1731 245.119 19.2655 245.185 19.3455C245.34 19.5332 245.574 19.64 245.817 19.6198C247.067 19.5157 248.003 19.1135 248.671 18.6764Z"
						fill="white"
					/>
				</svg>
			</div>

			{/* All rights reserved */}
			<p className="font-sans text-sm text-gray-400">
				© Harmony. All rights reserved
			</p>
		</footer>
	)
}
