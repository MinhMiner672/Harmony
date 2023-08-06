import { Be_Vietnam_Pro } from "next/font/google"
import Link from "next/link"

const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["700"] })

export default function ComingSoonPage() {
	return (
		<main className="w-full h-full flex flex-col items-center justify-center">
			<h1
				className={
					"text-5xl text-transparent animate-gradient bg-clip-text bg-gradient-to-r from-blue-400 to-lime-700 " +
					vietnam_pro.className
				}
			>
				Coming Soon
			</h1>
			<p className="text-2xl">This feature is still under development</p>
			<Link
				href="/"
				className="underline text-base text-blue-600 font-bold mt-2"
			>
				🡰 Back to home page
			</Link>
		</main>
	)
}
