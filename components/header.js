import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="md:font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:text-gray-700">Nicholas Hawn</a>
      </Link>
    </h2>
  )
}
