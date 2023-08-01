import { Kalam, Quicksand } from "next/font/google"

const kalam = Kalam({ subsets: ["latin"], weight: ["700"] })
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"] })

const quoteApiURL = "http://localhost:8080/quote"

export default async function Quote() {
	const quoteApiRes = await fetch(quoteApiURL, {
		method: "GET",
		next: { revalidate: 60 },
	})
	const responseData = await quoteApiRes.json()
	const { quote, author } = responseData

	return (
		<main className="px-[15%] py-40 flex flex-col gap-2 items-end text-center">
			<h1 className={`${kalam.className} text-5xl italic text-lime-700`}>
				❝{quote}❞
			</h1>
			<h3 className={`${quicksand.className} text-2xl`}>- {author} -</h3>
		</main>
	)
}
