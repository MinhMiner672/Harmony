import { Be_Vietnam_Pro } from "next/font/google"

const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["700"] })

export default function MinigamePage() {
	return (
		<main className="w-full h-full flex flex-col gap-3 items-center justify-center">
			<h1 className={"text-3xl " + vietnam_pro.className}>
				Enjoy the game!
			</h1>
			<iframe
				src="https://scratch.mit.edu/projects/878139547/embed"
				allowtransparency="true"
				width="485"
				height="402"
				frameborder="0"
				scrolling="no"
				allowfullscreen
			></iframe>
		</main>
	)
}
