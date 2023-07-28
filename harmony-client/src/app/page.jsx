import "@/styles/home.css"
import { Intro, Explore, Arrow, Team, Quote } from "@/components/home"

export default function Home() {
	return (
		<main>
			<Intro />
			<Explore />
			<Team />
			<Quote />

			{/* Bouncing arrow (indicating unread info) */}
			<Arrow />
		</main>
	)
}
