import Image from "next/image"
import NavLink from "./NavLink"
import { Be_Vietnam_Pro } from "next/font/google"

const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["400"] })

export default function NavBar() {
	return (
		<main className="w-screen bg-lime-800 flex justify-center items-center shadow-xl p-3 gap-96">
			<Image
				src="/images/icon-logo.png"
				width={40}
				height={40}
				alt="icon logo"
			/>
			<section
				className={`flex items-center gap-10 text-white ${vietnam_pro.className}`}
			>
				<NavLink _href="#">Forum</NavLink>
				<NavLink _href="#">Library</NavLink>
				<NavLink _href="#">AI Doctor</NavLink>
				<NavLink _href="#">Minigames</NavLink>
				<button className="border border-lime-300 rounded-full px-5 py-1 ">
					Sign Up
				</button>
			</section>
		</main>
	)
}
