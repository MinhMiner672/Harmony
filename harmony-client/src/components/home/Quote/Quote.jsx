import axios from "axios"
import cheerio from "cheerio"
import { Kalam, Quicksand } from "next/font/google"

const kalam = Kalam({ subsets: ["latin"], weight: ["700"] })
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"] })

export default async function Quote() {
	const { quote, author } = await getRandomQuote()
	return (
		<main className="px-[15%] py-40 flex flex-col gap-2 items-end text-center">
			<h1 className={`${kalam.className} text-5xl italic text-lime-700`}>
				❝{quote}❞
			</h1>
			<h3 className={`${quicksand.className} text-2xl`}>- {author} -</h3>
		</main>
	)
}

// Scrape a website for mental health quote
async function getRandomQuote() {
	const url = "https://therapybypro.com/best-mental-health-quotes/"
	const data = []
	try {
		// Fetch data from a (nice) website
		const response = await axios.get(url)
		const $ = cheerio.load(response.data)

		// Filter quote elements
		const quoteBlocks = $("blockquote")
		quoteBlocks.each(function () {
			// Extract all texts inside <blockquote> (quote + author)
			const textExtract = String($(this).text()).trim()

			// Split quote and author
			const result = textExtract.replace(/[^a-z0-9 .']/gi, "").split("  ")

			// Just avoid silly bugs (idk how to fix)
			if (result.length !== 2) return
			const [quote, author] = result

			// If the quote itself is too long
			if (quote.split(" ").length >= 30) return

			data.push({ quote, author })
		})

		// Get a random quote
		return data[Math.floor(Math.random() * data.length)]
	} catch (e) {
		console.error(e)
	}
}
