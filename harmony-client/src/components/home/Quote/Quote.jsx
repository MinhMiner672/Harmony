import { Kalam, Quicksand } from "next/font/google"
import getQuote from "@/app/lib/quoteFetch"

const kalam = Kalam({ subsets: ["latin"], weight: ["700"] })
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"] })

export default async function Quote() {
	const quoteData = await getQuote()
	const { quote, author } = quoteData

	return (
		<main className="px-[15%] py-40 flex flex-col gap-2 items-end text-center">
			<h1 className={`${kalam.className} text-5xl italic text-lime-700`}>
				❝{quote}❞
			</h1>
			<h3 className={`${quicksand.className} text-2xl`}>- {author} -</h3>
		</main>
	)
}
