import "./tailwind.css"
import { Pangolin } from "next/font/google"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const pangolin = Pangolin({ subsets: ["latin"], weight: ["400"] })

export const metadata = {
	title: "Harmony",
	description: "A website specialized in mental health support for teens",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${pangolin.className} h-screen`}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
