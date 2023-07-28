"use client"

import Image from "next/image"
import { Caveat, Quicksand } from "next/font/google"
import { motion } from "framer-motion"

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] })
const quicksand = Quicksand({ subsets: ["latin"], weight: ["500"] })

const cardVariants = {
	hidden: { opacity: 0, scale: 0 },
	inView: (order) => ({
		opacity: 1,
		scale: 1,
		transition: {
			delay: order * 0.4,
		},
	}),
}

export default function Card({ name, avtPath, role, order }) {
	return (
		<motion.main
			className="flex items-center gap-5 bg-blue-200 p-5 rounded-xl shadow-lg select-none"
			variants={cardVariants}
			initial="hidden"
			whileInView="inView"
			viewport={{ once: true }}
			custom={order}
		>
			<Image
				src={avtPath}
				width={100}
				height={100}
				className="rounded-full"
				key={name}
			/>
			<article>
				<header className={`${caveat.className} text-4xl`}>
					{name}
				</header>
				<p className={`${quicksand.className} text-xl text-gray-600`}>
					{role}
				</p>
			</article>
		</motion.main>
	)
}
