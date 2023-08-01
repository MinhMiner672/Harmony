import { Solitreo, Quicksand, Be_Vietnam_Pro } from "next/font/google"
import SpinLogo from "./SpinLogo"

const solitreo = Solitreo({ subsets: ["latin"], weight: ["400"] })
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"] })
const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["600"] })

export default function Intro() {
	return (
		<main className="bg-gray-100 flex justify-center items-center gap-5 py-44 px-80 shadow-xl rounded-b-[10%]">
			<article className="flex flex-col justify-start">
				<h1
					className={`${solitreo.className}  text-7xl text-transparent animate-gradient bg-clip-text bg-gradient-to-r from-blue-700 to-lime-600`}
				>
					Harmony
				</h1>
				<p className={`${quicksand.className} text-2xl text-gray-700`}>
					Millions of people are facing mental health challenges every
					year, but we, Harmony are here to accompany you through this
					journey.
				</p>
				<section className={`flex gap-5 pt-2 ${vietnam_pro.className}`}>
					<button className="shadow-lg py-3 px-6 rounded-full bg-[#A6DE9B] text-lime-900 hover:bg-lime-800 hover:text-white transition-all duration-75">
						Chat with AI Doctor
					</button>
					<button className="shadow-lg py-3 px-6 rounded-full border-2 bg-blue-300 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-75">
						Join the forum
					</button>
				</section>
			</article>
			<SpinLogo />
		</main>
	)
}
