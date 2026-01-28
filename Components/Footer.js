import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center p-4 bg-blue-950 text-white border-t border-neutral-800">
        <p className="text-sm">Copyright © {year} Get Me A Donut. All rights reserved.</p>
    </footer>
  )
}

export default Footer
