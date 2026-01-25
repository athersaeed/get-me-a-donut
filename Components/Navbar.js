"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [dropdown, setDropdown] = useState(false)
    // if(session) {
    //     return <>
    //       Signed in as {session.user.email} <br/>
    //       <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }
    return (
        <nav className="flex justify-between items-center px-4 h-16 md:px-8 bg-blue-950 border-b border-neutral-800 text-white sticky top-0 backdrop-blur-md z-10">
            <div className="logo flex items-center gap-2 justify-center font-bold text-lg">
                <span>
                    <Link href="/"><img className='invertImg' width={40} src="tea.gif" alt="" /></Link>
                </span>
                <Link href="/">GetMeADonut</Link>
            </div>
            <ul className="flex gap-6 text-sm font-medium items-center">
                <div className='flex gap-4 items-center ml-4'>
                    <li>
                        {/* dropdown for dashboard when logged in */}
                        {session && <div className="relative inline-block text-left">
                            <button onClick={() => setDropdown(!dropdown)} onBlur={() => setTimeout(() => setDropdown(false), 300)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                                Welcome {session.user.name}
                                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                                </svg>
                            </button>

                            {dropdown && (
                                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</Link>
                                        <Link href={`/${session.user.username}`} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Your Page</Link>
                                        <Link href="/login"><button onClick={() => signOut()} className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Sign out</button></Link>
                                    </div>
                                </div>
                            )}
                        </div>}

                        {/* dashboard
                        {session && <Link href="/profile" className="px-4 py-2 mx-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
                            Dashboard
                        </Link>}

                        {/* logout */}
                        {/* {session && <button onClick={() => signOut()} className="px-4 py-2 mx-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
                            Logout
                        </button>} */}
                        {!session && <Link href="/login" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
                            Login
                        </Link>}
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
