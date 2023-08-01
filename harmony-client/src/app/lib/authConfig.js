import GoogleProvider from "next-auth/providers/google"

const authConfiguration = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
}

export default authConfiguration
