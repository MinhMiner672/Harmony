import express from "express"
import cors from "cors"
import { config } from "dotenv"

import QuoteRouter from "./routes/quote.js"
import AuthRouter from "./routes/auth.js"

config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(
	cors({
		origin: "*",
	})
)

app.use("/quote", QuoteRouter)
app.use("/auth", AuthRouter)

app.listen(PORT, () => {
	console.log("Backend ready on port " + PORT)
})
