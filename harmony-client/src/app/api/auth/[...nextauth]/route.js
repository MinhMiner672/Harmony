import NextAuth from "next-auth"
import authConfiguration from "@/app/lib/authConfig"

const handler = NextAuth(authConfiguration)

export { handler as GET, handler as POST }
