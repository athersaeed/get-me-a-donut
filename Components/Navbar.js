import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 md:px-8 bg-blue-950 border-t border-neutral-800 text-white sticky top-0 backdrop-blur-md z-10">
        <div className="logo flex items-center gap-2 justify-center font-bold text-lg">
            <span>
                <img width={40} src="tea.gif" alt="" />
            </span>
            <Link href="/">GetMeADonut</Link>
        </div>
        <ul className="flex gap-6 text-sm font-medium items-center">
            {/* <li><Link href="/" className="hover:text-gray-500 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-500 transition-colors">About</Link></li>
            <li><Link href="/projects" className="hover:text-gray-500 transition-colors">Projects</Link></li> */}
            <div className='flex gap-4 items-center ml-4'>
                {/* <li><Link href="/login" className="hover:text-gray-500 transition-colors">Login</Link></li> */}
                <li>
                    <Link href="/login" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
                        Login
                    </Link>
                </li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar
