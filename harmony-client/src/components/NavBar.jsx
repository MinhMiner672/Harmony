import { Be_Vietnam_Pro } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["600"] })

export default function NavBar() {
	return (
		<nav className="bg-white fixed top-0 w-full flex justify-around items-center shadow-lg py-3 z-50">
			<Link href="#">
				<Image
					src="/images/logo/harmony_full.svg"
					width={150}
					height={40}
					alt="icon logo"
				/>
			</Link>
			<section
				className={`flex items-center gap-7 text-lime-800 ${vietnam_pro.className}`}
			>
				<NavLink _href="#">Forum</NavLink>
				<NavLink _href="#">Library</NavLink>
				<NavLink _href="#">AI Doctor</NavLink>
				<NavLink _href="#">Minigames</NavLink>
				<NavLink _href="#">Contact</NavLink>
			</section>
			<button
				className={
					"border-2 text-lime-800 border-lime-800 rounded-full px-5 py-1 hover:text-white hover:bg-lime-800 transition-all " +
					vietnam_pro.className
				}
			>
				Sign Up
			</button>
		</nav>
	)
}

function NavLink({ _href, children }) {
	return (
		<Link href={_href} className="hover:underline">
			{children}
		</Link>
	)
}
