import "@/styles/home.css"
import { Intro, Explore, Team, Quote } from "@/components/home"

export default function Home() {
	return (
		<main>
			<Intro />
			<Explore />
			<Team />
			<Quote />
		</main>
	)
}
