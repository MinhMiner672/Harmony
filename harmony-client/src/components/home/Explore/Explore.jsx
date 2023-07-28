import { Be_Vietnam_Pro } from "next/font/google"
import Category from "./Category"

const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["600"] })

export default function Explore() {
	return (
		<main className="flex flex-col items-center justify-center border-2 py-36 gap-10">
			<h1
				className={`flex flex-col items-center gap-3 ${vietnam_pro.className} text-gray-600 font-bold text-3xl`}
			>
				<p>
					<b className="text-lime-700 underline text-4xl">Explore</b>{" "}
					our services
				</p>
				<hr className="w-[150%] h-1 shadow-xl bg-gray-200" />
			</h1>

			{/* List of categories */}
			<ul className="flex flex-wrap items-center gap-10">
				<Category
					name="Minigame"
					imgFileName="joystick"
					order={1}
					bgColor="bg-red-400"
				/>
				<Category
					name="Library"
					imgFileName="light_bulb"
					order={2}
					bgColor="bg-lime-500"
				/>
				<Category
					name="Emotion Diary"
					imgFileName="diary"
					order={3}
					bgColor="bg-blue-400"
				/>
				<Category
					name="AI Doctor"
					imgFileName="ai_doctor"
					order={4}
					bgColor="bg-yellow-300"
				/>
				<Category
					name="Forum"
					imgFileName="community"
					order={5}
					bgColor="bg-purple-400"
				/>
			</ul>
		</main>
	)
}
