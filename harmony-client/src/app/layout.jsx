import "./globals.css"
import { Pangolin } from "next/font/google"
import NavBar from "@/components/NavBar"

const pangolin = Pangolin({ subsets: ["latin"], weight: ["400"] })

export const metadata = {
	title: "Harmony",
	description: "A website specialized in mental health support for teens",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="bg-lime-200">
			<body className={pangolin.className}>
				<NavBar />
				{children}
			</body>
		</html>
	)
}
