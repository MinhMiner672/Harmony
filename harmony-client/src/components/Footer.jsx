import { Quicksand } from "next/font/google"
import Link from "next/link"
import Image from "next/image"

const quicksand = Quicksand({ subsets: ["latin"], weight: ["700"] })

export default function Footer() {
	return (
		<footer className="gap-8 flex flex-col items-center justify-center bg-lime-900 w-full py-10">
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
				<h1 className={`${quicksand.className} text-white text-xl`}>
					Stay in touch
				</h1>
				<section className="flex gap-6">
					<Image
						src="/images/social-media/facebook.png"
						width={20}
						height={20}
						key="facebook"
					/>
					<Image
						src="/images/social-media/insta.png"
						width={20}
						height={20}
						key="instagram"
					/>
					<Image
						src="/images/social-media/inbox.png"
						width={20}
						height={20}
						key="gmail"
					/>
					<Image
						src="/images/social-media/twitter.png"
						width={20}
						height={20}
						key="twitter"
					/>
					<Image
						src="/images/social-media/discord.png"
						width={20}
						height={20}
						key="discord"
					/>
				</section>
			</div>

			{/* All rights reserved */}
			<p className="font-sans text-sm text-gray-400">
				© Harmony. All rights reserved
			</p>
		</footer>
	)
}
