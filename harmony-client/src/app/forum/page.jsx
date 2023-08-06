"use client"

import { createContext, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { onSnapshot, collection } from "firebase/firestore"
import { database } from "../lib/firebaseUtils"

import { ForumLoadingUI, PostArea } from "@/components/forum"

import { Be_Vietnam_Pro } from "next/font/google"

const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["700"] })

export const FilterContext = createContext(null)

export default function Forum() {
	const session = useSession()

	const [posts, setPosts] = useState([])
	const [filterTagsSelected, setFilterTagsSelected] = useState(["all"])

	// Update new posts in real time
	useEffect(() => {
		onSnapshot(collection(database, "forum-data"), (snapshot) => {
			const postList = []
			snapshot.docs.map((doc) => {
				postList.unshift({ ...doc.data() })
			})
			console.log(postList)
			setPosts(postList)
		})
	}, [])

	return (
		<>
			{session.status === "loading" && <ForumLoadingUI />}
			{session.status === "unauthenticated" && (
				<h1 className="text-4xl h-full w-full flex items-center justify-center">
					Please{" "}
					<span
						className={`px-2 text-lime-700 underline ${vietnam_pro.className}`}
					>
						Sign In
					</span>{" "}
					to use this service
				</h1>
			)}
			{session.status === "authenticated" && (
				<FilterContext.Provider
					value={{ filterTagsSelected, setFilterTagsSelected }}
				>
					<PostArea posts={posts} session={session} />
				</FilterContext.Provider>
			)}
		</>
	)
}
