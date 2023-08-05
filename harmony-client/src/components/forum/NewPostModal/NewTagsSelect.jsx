"use client"

import { useState, useEffect, useContext } from "react"
import { TagContext } from "./NewPostBtn"

export default function NewTagsSelector({ name }) {
	const [selected, setSelectedState] = useState(false)
	const { popupOpened, setSelectedTags } = useContext(TagContext)

	// If the pop is closed and there are selected tags
	useEffect(() => {
		if (!popupOpened && selected) {
			setSelectedState(false)
		}
	}, [popupOpened])

	return (
		<>
			{!selected && (
				<p
					onClick={() => {
						setSelectedState(!selected)
						setSelectedTags((prevSelectedTags) => {
							return [...prevSelectedTags, name]
						})
					}}
					className="px-3 bg-gray-300 rounded-full hover:cursor-pointer select-none"
				>
					#{name}
				</p>
			)}
			{selected && (
				<p
					onClick={() => {
						setSelectedState(!selected)
						setSelectedTags((prevSelectedTags) => {
							const copyOfPrev = [...prevSelectedTags]
							copyOfPrev.pop()
							return copyOfPrev
						})
					}}
					className="px-3 bg-lime-400 rounded-full hover:cursor-pointer select-none"
				>
					#{name}
				</p>
			)}
		</>
	)
}
