"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SpinLogo() {
	return (
		<motion.div
			animate={{ rotate: -360 }}
			transition={{ type: "spring", duration: 3, repeat: Infinity }}
		>
			<Image
				src="/images/logo/harmony_icon.png"
				className="select-none"
				width={700}
				height={100}
			/>
		</motion.div>
	)
}
