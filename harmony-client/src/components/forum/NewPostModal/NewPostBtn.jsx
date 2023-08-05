"use client"

import { Be_Vietnam_Pro } from "next/font/google"
import { useState } from "react"
import { createContext } from "react"

import { doc, setDoc, getCountFromServer } from "firebase/firestore"
import { database, forumCollection } from "@/app/lib/firebaseUtils"
import { useSession } from "next-auth/react"

import ContentEditable from "react-contenteditable"
import NewTagsSelector from "./NewTagsSelect"
import swal from "sweetalert"

export const TagContext = createContext(null)
const vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["700"] })

export default function NewPost() {
	const session = useSession()

	const availableTags = ["qna", "tamsu", "knowledge", "flex", "tips"]

	const [selectedTags, setSelectedTags] = useState(["all"])
	const [popupOpened, setPopupOpenedState] = useState(false)

	const [titleInput, setTitleInput] = useState("")
	const [contentInput, setContentInput] = useState("")

	const clearInputContent = () => {
		setPopupOpenedState(false)
		setSelectedTags(["all"])
		setTitleInput("")
		setContentInput("")
	}

	const submitNewPost = async (e) => {
		// If either the input is empty
		if (!titleInput || !contentInput) {
			swal({
				title: "Warning",
				text: "Please fill in enough information to create a new post",
				icon: "warning",
			})
		} else {
			const snapshot = await getCountFromServer(forumCollection)

			const { name, email, image } = session.data.user

			const numberOfPosts = snapshot.data().count
			const data = {
				title: titleInput,
				content: contentInput,
				author: name,
				gmail: email,
				avtURL: image,
				tags: selectedTags,
				likes: [],
				comments: [],
				order: String(numberOfPosts + 1),
			}

			await setDoc(
				doc(database, "forum-data", String(numberOfPosts + 1)),
				data
			)
		}

		clearInputContent()
	}

	return (
		<TagContext.Provider
			value={{
				popupOpened,
				setPopupOpenedState,
				setSelectedTags,
			}}
		>
			<main className="bg-gray-50">
				<button
					onClick={() => {
						window.new_post_dialog.showModal()
						setPopupOpenedState(true)
					}}
					className="text-xl text-gray-400 bg-gray-300 hover:px-20 hover:text-gray-700 hover:cursor-pointer rounded-full py-3 px-7 transition-all duration-400 ease-in-out select-none"
				>
					Tell us about your story
				</button>

				<dialog id="new_post_dialog" className="modal">
					<form
						method="dialog"
						className="modal-box px-5 flex flex-col gap-5"
					>
						{/* Close button */}
						<button
							onClick={clearInputContent}
							className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						>
							✕
						</button>

						{/* User input */}
						<div className="flex flex-col gap-5 items-center">
							<h1 className={"text-2xl " + vietnam_pro.className}>
								Create post
							</h1>

							{/* Tags selection */}
							<section className="w-full">
								<h2
									className={
										"text-lg " + vietnam_pro.className
									}
								>
									Select Tags
								</h2>{" "}
								<ul className="flex flex-wrap gap-1">
									{availableTags.map((tag, tagIndex) => (
										<NewTagsSelector
											name={tag}
											key={tagIndex}
										/>
									))}
								</ul>
							</section>

							{/* Title input */}
							<section className="w-full">
								<h2
									className={
										"text-lg " + vietnam_pro.className
									}
								>
									Title
								</h2>
								<ContentEditable
									className=" title-input px-1 max-w-full overflow-y-hidden break-words border border-solid border-gray-400 rounded-md focus:outline-none focus:border-gray-700 focus:ring-gray-500 text-lg py-1"
									html={titleInput}
									onChange={(e) =>
										setTitleInput(e.target.value)
									}
									disabled={false}
								/>
							</section>

							{/* Content input */}
							<div className="w-full">
								<h2
									className={
										"text-lg " + vietnam_pro.className
									}
								>
									Content
								</h2>
								<ContentEditable
									className="content-input px-1 max-w-full overflow-y-hidden break-words border border-solid border-gray-400 rounded-md focus:outline-none focus:border-gray-700 focus:ring-gray-500 text-lg py-1"
									html={contentInput}
									onChange={(e) =>
										setContentInput(e.target.value)
									}
									disabled={false}
								/>
							</div>
						</div>

						{/* Submit button */}
						<button
							onClick={submitNewPost}
							className="w-full bg-[#3982e4] py-2 rounded-lg text-base text-white font-bold"
						>
							Post
						</button>
					</form>
				</dialog>
			</main>
		</TagContext.Provider>
	)
}
