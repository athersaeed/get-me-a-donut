"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'

const Dashboard = () => {
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (!session) {
            router.push('/login')
        } else if (session?.user?.name) {
            router.push(`/${session.user.name}`)
        }
    }, [session, router])

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
