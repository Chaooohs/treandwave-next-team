
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'


export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', required: true },
        password: { label: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // запрос на бэкенд по юзерам

        return null
      }
    })
  ]
}