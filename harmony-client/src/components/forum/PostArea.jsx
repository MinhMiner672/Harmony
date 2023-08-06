import { Post, NewPost, PostFilter } from "@/components/forum"

export default function PostArea({ posts, session }) {
	return (
		<main className="mt-32 mb-44 flex flex-col gap-5 items-center">
			{session.status === "authenticated" && <NewPost />}
			{session.status === "authenticated" && <PostFilter />}

			{posts.map((post) => {
				const { title, content, author, gmail, avtURL, tags, order } =
					post
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
	)
}
