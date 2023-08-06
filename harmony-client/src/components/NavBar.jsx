import { getServerSession } from "next-auth"
import { Raleway } from "next/font/google"

import Image from "next/image"
import Link from "next/link"
import UserAvt from "./UserAvt"
import authConfiguration from "@/app/lib/authConfig"

const raleway = Raleway({ subsets: ["latin"], weight: ["700"] })

export default async function NavBar() {
	const session = await getServerSession(authConfiguration)

	return (
		<nav className="bg-white fixed top-0 w-full flex justify-around items-center shadow-lg py-3 z-50">
			<Link href="/">
				<Image
					src="/images/logo/harmony_full.svg"
					width={150}
					height={150}
					alt="harmony_logo"
				/>
			</Link>
			<section
				className={`flex items-center gap-7 text-lime-800 ${raleway.className}`}
			>
				<NavLink _href="/forum">Forum</NavLink>
				<NavLink _href="#">Library</NavLink>
				<NavLink _href="/coming-soon">AI Doctor</NavLink>
				<NavLink _href="/minigames">Minigames</NavLink>
				<NavLink _href="#footer">Contact</NavLink>
			</section>
			<UserAvt nextAuthServerSession={session} />
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
