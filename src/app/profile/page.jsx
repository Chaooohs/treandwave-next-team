import { getServerSession } from "next-auth"
import { authConfig } from "../configs/auth"


export default async function Profile () {
  const session = await getServerSession(authConfig)
  return (
    <main>
      <h1 className="text-center font-bold text-3xl">Profile of {session?.user?.name}</h1>
    </main>
  )
}