import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
//import EmailProvider from "next-auth/providers/email"

const handler = NextAuth({
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // Passwordless / email sign in
        /*EmailProvider({
            server: process.env.MAIL_SERVER,
            from: 'NextAuth.js <no-reply@example.com>'
        }),*/
    ]
})

export { handler as GET, handler as POST }