import { getServerSession } from "next-auth"
import authConfiguration from "../lib/authConfig"

export default async function AboutPage() {
	const session = await getServerSession(authConfiguration)

	return (
		<div className="mt-28">
			{session?.user && <img src={session.user.image} />}
		</div>
	)
}
