/* @flow */
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <Link prefetch href="/">
          <a>Index</a>
        </Link>
        |
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  )
}
