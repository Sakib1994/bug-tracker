'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GoBug } from 'react-icons/go'
import classnames from 'classnames'

const Navbar = () => {
    const links = [{ label: 'Dashboard', href: '/' }, { label: 'Issues', href: '/issues' }]
    const currentPath = usePathname();
    return (
        <nav className='flex justify-between border-b mb-5 px-5 h-14 items-center'>
            <Link href={'/'} ><GoBug /></Link>
            <ul className='flex space-x-6'>
                {links.map(({ label, href }) => <li className={`p-2 ${href === currentPath?'bg-slate-100 rounded-lg':''}`}>
                    <Link className={classnames({
                        "text-zinc-900": href === currentPath,
                        "text-zinc-500": href !== currentPath,
                        "hover:text-zinc-800 transition-colors": true
                    })} href={href}>{label}</Link>
                </li>)}
            </ul>
            <Link href="login">Login</Link>
        </nav>
    )
}

export default Navbar