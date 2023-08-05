"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { database } from "@/app/lib/firebaseUtils"

export default function LikeBtn({ postOrderID }) {
	const session = useSession()

	const [liked, setLikeState] = useState(false)

	// If the user has liked the post before
	useEffect(() => {
		async function fetchLikes() {
			if (session.status === "authenticated") {
				const currentPostDocument = doc(
					database,
					"forum-data",
					postOrderID
				)
				const postDocSnap = await getDoc(currentPostDocument)
				const likesList = postDocSnap.data().likes

				if (likesList.includes(session.data.user.email)) {
					setLikeState(true)
				} else {
					setLikeState(false)
				}
			}
		}
		fetchLikes()
	}, [session.status])

	const changeLikeState = async () => {
		const userEmail = session.data.user.email

		const currentPostDocument = doc(database, "forum-data", postOrderID)
		const postDocSnap = await getDoc(currentPostDocument)
		const currentPostData = postDocSnap.data()

		// Create a new copy of likes list so that we can overwrite
		const currentLikes = [...currentPostData.likes]

		if (!liked) currentLikes.push(userEmail)
		else currentLikes.splice(currentLikes.indexOf(userEmail), 1)

		const updatedPostData = {
			...currentPostData,
			...{ likes: currentLikes },
		}

		// Update like state by overwriting old data
		await setDoc(currentPostDocument, updatedPostData)

		setLikeState(!liked)
	}

	return (
		<button
			onClick={changeLikeState}
			className="flex gap-1 hover:bg-gray-300 px-5 py-1 rounded-md"
		>
			{liked ? (
				<Image
					src="/images/forum/pink_heart.png"
					width={24}
					height={24}
					alt="pink_heart"
				/>
			) : (
				<Image
					src="/images/forum/heart.png"
					width={24}
					height={24}
					alt="heart"
				/>
			)}
			Interested
		</button>
	)
}
