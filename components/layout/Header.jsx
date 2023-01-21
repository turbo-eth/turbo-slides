import React from 'react'
import Link from 'next/link'
import { ThemeSwitcher } from '../layout/ThemeSwitcher'

export default function Header({ name, title, date, url }) {
  return (
    <header className="Header opacity-20 hover:opacity-100 transition-opacity duration-500 ease-in-out flex justify-between items-center">
      <div>
        <Link className="font-raleway dark:text-white text-neutral-700" href={'/'}>
          {name}
          <span className="mx-1">⚡️</span>
          <span className="font-bold dark:text-white text-neutral-700">{title}</span>
        </Link>
      </div>
      <div className="flex items-center">
        <time className="dark:text-white text-neutral-800 mr-3">{date}</time>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
