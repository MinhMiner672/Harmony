"use client"

import { createContext, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { onSnapshot, collection } from "firebase/firestore"
import { database } from "../lib/firebaseUtils"

import { Post, NewPost, ForumLoadingUI, PostFilter } from "@/components/forum"

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
		<FilterContext.Provider
			value={{ filterTagsSelected, setFilterTagsSelected }}
		>
			<main className="mt-32 mb-44 flex flex-col gap-5 items-center">
				{session.status === "loading" && <ForumLoadingUI />}

				{session.status === "authenticated" && <NewPost />}
				{session.status === "authenticated" && <PostFilter />}

				{posts.map((post) => {
					const {
						title,
						content,
						author,
						gmail,
						avtURL,
						tags,
						order,
					} = post
					return (
						<Post
							title={title}
							content={content}
							author={author}
							gmail={gmail}
							avtURL={avtURL}
							tags={tags}
							order={order}
						/>
					)
				})}
			</main>
		</FilterContext.Provider>
	)
}
