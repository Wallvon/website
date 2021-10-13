import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ href, children }) => {
    const router = useRouter()

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${className} text-white`
    } else {
        className = `${className} text-gray-400`
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default NavLink