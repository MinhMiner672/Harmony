"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Arrow() {
	useEffect(() => {
		window.onscroll = () => {
			const arrowImg = document.querySelector(".arrow-img")
			arrowImg.style.visibility = "hidden"
		}
	}, [])

	return (
		<Image
			src="/images/down_arrow.png"
			width={40}
			height={100}
			className="arrow-img animate-bounce opacity-40 fixed bottom-5 left-[50%] right-[50%]"
		></Image>
	)
}
