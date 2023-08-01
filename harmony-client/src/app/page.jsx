import "@/styles/home.css"
import { Intro, Explore, BouncingArrow, Team, Quote } from "@/components/home"

export default async function Home() {
	return (
		<main>
			<Intro />
			<Explore />
			<Team />
			<Quote />

			{/* Bouncing arrow (indicating unread info) */}
			<BouncingArrow />
		</main>
	)
}
