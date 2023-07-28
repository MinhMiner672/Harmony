import { Be_Vietnam_Pro } from "next/font/google"
import Card from "./Card"

const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["600"] })

export default function Team() {
	return (
		<main className="py-32 px-10 flex flex-col gap-10 bg-gray-100 rounded-t-[10%] shadow-[40px_-5px_40px_-5px_#bababa]">
			<h1
				className={`text-gray-600 ${vietnam_pro.className} font-bold text-4xl flex flex-col items-center gap-2`}
			>
				<p>
					Meet our <b className="text-blue-600 underline">Team</b>
				</p>
				<hr className="w-[40%] h-1 shadow-xl bg-gray-300" />
			</h1>
			<section className="flex flex-wrap gap-3 items-center justify-center">
				<Card
					avtPath="/images/avatars/hoang_minh.jpg"
					name="Pham Hoang Minh"
					role="Core Developer"
					order={1}
				/>
				<Card
					avtPath="/images/avatars/hector.jpg"
					name="Quan Thanh Nghiep	"
					role="Team Leader / Project Manager"
					order={2}
				/>
				<Card
					avtPath="/images/avatars/quynh.jpg"
					name="Truong Do Nhu Quynh"
					role="Web Designer"
					order={3}
				/>
				<Card
					avtPath="/images/avatars/heulwen.jpg"
					name="Tran Thi Ngoc Huyen"
					role="Core Developer"
					order={4}
				/>
			</section>
		</main>
	)
}
