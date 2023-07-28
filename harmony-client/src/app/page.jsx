import "@/styles/home.css"
import Intro from "@/components/home/Intro/Intro"
import Explore from "@/components/home/Explore/Explore"
import Arrow from "@/components/home/Arrow"
import Team from "@/components/home/Team/Team"
import Quote from "@/components/home/Quote/Quote"

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
