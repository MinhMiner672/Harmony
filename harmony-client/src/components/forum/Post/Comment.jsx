"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { database } from "@/app/lib/firebaseUtils"
import { getDoc, doc, setDoc, onSnapshot } from "firebase/firestore"
import { Be_Vietnam_Pro } from "next/font/google"

const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["600"] })

export default function CommentBtn({ author, postOrderID }) {
	const session = useSession()
	const [commentText, setCommentText] = useState("")
	const [allComments, setComments] = useState([])

	useEffect(() => {
		onSnapshot(doc(database, "forum-data", postOrderID), (doc) => {
			setComments(doc.data().comments)
		})
	}, [])

	const submitComment = async (e) => {
		e.preventDefault()
		if (!commentText) return alert("Please type at least one character")

		const currentPostSnap = await getDoc(
			doc(database, "forum-data", postOrderID)
		)
		const currentPostData = { ...currentPostSnap.data() }
		const currentPostComments = [...currentPostData.comments]
		const { name, image } = session.data.user
		currentPostComments.unshift({
			author: name,
			avtURL: image,
			content: commentText,
		})

		await setDoc(doc(database, "forum-data", postOrderID), {
			...currentPostData,
			comments: currentPostComments,
		})
		setCommentText("")
	}

	return (
		<>
			<button
				onClick={() =>
					document
						.getElementById("comment_modal_" + postOrderID)
						.showModal()
				}
				className="select-none flex gap-1 px-5 py-1 hover:bg-gray-300"
			>
				<Image src="/images/forum/comment.png" width={24} height={24} />
				Comment
			</button>

			<dialog id={"comment_modal_" + postOrderID} className="modal">
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
				<form
					method="dialog"
					className="modal-box w-10/12 max-w-3xl flex flex-col items-center gap-3 bg-gray-50"
					onSubmit={submitComment}
				>
					<h3 className="font-bold text-2xl">
						{author}'s Post with order {postOrderID}
					</h3>
					<main className="w-full px-10 flex flex-col gap-3 z-0">
						{/* Text area */}
						<section className="w-full h-[23rem] px-3 py-5 overflow-y-scroll flex flex-col gap-3 border-2 bg-white border-gray-200 shadow-md">
							{allComments.map((comment) => {
								return (
									<article className="flex gap-2 items-center">
										<Image
											src={comment.avtURL}
											width={40}
											height={20}
											className="rounded-full"
										/>
										<section className="flex flex-col items-start justify-start rounded-lg bg-gray-200 shadow-sm px-3 py-1">
											<h1
												className={
													"" + vietnam_pro.className
												}
											>
												{comment.author}
											</h1>
											<p>{comment.content}</p>
										</section>
									</article>
								)
							})}
						</section>

						{/* User comment input */}
						<section className="flex gap-3 justify-center w-full">
							<Image
								src={session.data?.user?.image}
								width={40}
								height={40}
								className="rounded-full"
							/>
							<input
								type="text"
								className="w-full px-2 border-2 border-gray-200 rounded-lg placeholder-gray-500"
								placeholder="Type your comment"
								onChange={(event) =>
									setCommentText(event.target.value)
								}
								value={commentText}
							/>
						</section>
					</main>
				</form>
			</dialog>
		</>
	)
}
