"use client"

import { Be_Vietnam_Pro, Quicksand } from "next/font/google"
import { motion, spring } from "framer-motion"
import Link from "next/link"

const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["600"] })
const quicksand = Quicksand({ subsets: ["latin"], weight: ["700"] })

const categoryVariants = {
	hidden: { opacity: 0, y: 100 },
	inView: (order) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: order * 0.3,
		},
	}),
}

export default function Category({ name, imgFileName, order, bgColor }) {
	const imgPath = `/images/explore/${imgFileName}.png`

	return (
		<motion.section
			variants={categoryVariants}
			initial="hidden"
			whileInView="inView"
			viewport={{ once: true }}
			custom={order}
		>
			<Link href="#" className="flex flex-col items-center gap-2">
				<motion.img
					whileHover={{ scale: 1.1, rotate: 10 }}
					transition={{ type: spring, duration: 0.1 }}
					src={imgPath}
					width={100}
					height={100}
					className={`${bgColor} rounded-full p-3 shadow-xl`}
				></motion.img>
				<header className={`${quicksand.className}`}>{name}</header>
			</Link>
		</motion.section>
	)
}
