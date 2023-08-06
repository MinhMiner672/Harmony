"use client"

import { useContext, useState } from "react"
import { FilterContext } from "@/app/forum/page"

export default function PostFilter() {
	return (
		<main className="flex gap-3 bg-[#9FA7EC] px-12 py-3 rounded-md">
			<Tag name="tamsu" />
			<Tag name="knowledge" />
			<Tag name="flex" />
			<Tag name="tips" />
			<Tag name="qna" />
		</main>
	)
}

function Tag({ name }) {
	const [tagSelected, setTagState] = useState(false)
	const { setFilterTagsSelected } = useContext(FilterContext)

	const toggleFilterTag = () => {
		if (!tagSelected)
			setFilterTagsSelected((prevFilterTags) => [...prevFilterTags, name])
		if (tagSelected)
			setFilterTagsSelected((prevFilterTags) => {
				const toggledTagIndex = prevFilterTags.indexOf(name)
				const copyOfPrevTags = [...prevFilterTags]
				copyOfPrevTags.splice(toggledTagIndex, 1)
				return copyOfPrevTags
			})

		setTagState(!tagSelected)
	}

	return (
		<>
			{tagSelected && (
				<button
					onClick={toggleFilterTag}
					className="px-5 py-1 bg-[#bfff95] select-none rounded-full"
				>
					#{name}
				</button>
			)}
			{!tagSelected && (
				<button
					onClick={toggleFilterTag}
					className="px-5 py-1 bg-[#F5F3F3] select-none rounded-full"
				>
					#{name}
				</button>
			)}
		</>
	)
}
