import express from "express"
import axios from "axios"
import cheerio from "cheerio"

const QuoteRouter = express.Router()

QuoteRouter.get("/", async (req, res) => {
	const quote = await scrape()
	res.status(200).send(quote)
})

async function scrape() {
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
			const result = textExtract.replace(/[^a-z0-9 .]/gi, "").split("  ")

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

export default QuoteRouter
