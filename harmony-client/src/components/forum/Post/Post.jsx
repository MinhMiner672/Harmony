"use client"

import { database } from "@/app/lib/firebaseUtils"
import { LikeBtn, CommentBtn } from "@/components/forum"
import { doc, onSnapshot } from "firebase/firestore"
import { Jost, Quicksand } from "next/font/google"

import Image from "next/image"
import { useContext, useEffect, useState } from "react"

import { FilterContext } from "@/app/forum/page"

const jost = Jost({ subsets: ["latin"], weight: ["700"] })
const quicksand = Quicksand({ subsets: ["latin"], weight: ["500"] })

export default function Post({
	title,
	content,
	author,
	gmail,
	avtURL,
	tags,
	order,
}) {
	// Number of likes
	const [likes, setLikes] = useState(0)
	const [comments, setComments] = useState(0)

	const { filterTagsSelected } = useContext(FilterContext)

	// Update likes in real time
	useEffect(() => {
		onSnapshot(doc(database, "forum-data", order), (doc) => {
			setLikes(doc.data().likes.length)
			setComments(doc.data().comments.length)
		})
	}, [])

	return (
		<>
			{/* Filtering | If "filterTagsSelected" is a subset of "tags" */}
			{filterTagsSelected.every((item) => tags.includes(item)) && (
				<article className="w-[45%] flex flex-col gap-3 border border-gray-300 bg-gray-50 rounded-2xl shadow-lg p-5">
					{/* Tags */}
					<section className="flex gap-1">
						{tags.map((tag) => {
							return <StaticTag name={tag} />
						})}
					</section>

					{/* User basic info */}
					<section className="flex items-center gap-3">
						<Image
							src={avtURL}
							width={50}
							height={50}
							alt="user avt"
							className="rounded-xl"
						/>

						{/* Name + email */}
						<div className="">
							<h1 className={"text-xl " + jost.className}>
								{author}
							</h1>
							<p className="text-gray-500">{gmail}</p>
						</div>
					</section>

					{/* Post (Text) */}
					<main>
						<h1 className={"text-3xl font-bold " + jost.className}>
							{title}
						</h1>
						<p className={"text-xl " + quicksand.className}>
							{content}
						</p>
					</main>

					{/* Post statistics (Likes, comments) */}
					<section className="w-full flex gap-3 justify-end">
						<div className="flex items-center gap-1">
							{likes}
							<Image
								src="/images/forum/heart.png"
								width={24}
								height={24}
								alt="heart icon"
							/>
						</div>
						<div className="flex items-center gap-1">
							{comments}
							<Image
								src="/images/forum/comment.png"
								width={24}
								height={24}
								alt="comment icon"
							/>
						</div>
					</section>

					{/* Break line */}
					<hr className="w-full h-[0.2rem] bg-gray-200" />

					{/* Post functions (Like, comment) */}
					<section className="w-full flex justify-around">
						<LikeBtn postOrderID={order} />
						<CommentBtn author={author} postOrderID={order} />
					</section>
				</article>
			)}
		</>
	)
}

function StaticTag({ name }) {
	return (
		<>
			{name !== "all" && (
				<div className="px-4 bg-gray-300 select-none rounded-full">
					#{name}
				</div>
			)}
		</>
	)
}
