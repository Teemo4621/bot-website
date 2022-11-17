import React from 'react'
import Link from 'next/link'

function navbar() {
    return (
        <nav className="navbar bg-zinc-800 w-full text-white p-3 shadow-md shadow-white/5 fixed z-10 md:h-[4rem]">
            <div className="navbar-wrapper container flex flex-wrap mx-auto h-full justify-between items-center text-center">
                <div className="logo mx-auto md:mx-[0]">
                    <Link Link href="/">
                        <h2 className="text-xl font-bold">ZEMOB<sup className="text-xs">BOT</sup></h2>
                    </Link>
                </div>
                <div className="menu mx-auto sm:mx-0">
                    <ul className="flex text-center">
                        <li className="px-2 sm:px-4"><Link href="/" className="h-full hover:opacity-80 duration-150 font-bold"><box-icon name='home' color='#ffffff' ></box-icon>หน้าหลัก</Link></li>
                        <li className="px-2 sm:px-4"><Link href="/command" className="h-full hover:opacity-80 duration-150 font-bold"><box-icon name='terminal' color='#ffffff' ></box-icon>คำสั่ง</Link></li>
                        <li className="px-2 sm:px-4"><Link href="/command" className="h-full hover:opacity-80 duration-150 font-bold"><box-icon name='discord-alt' type='logo' color='#ffffff'></box-icon>เข้าสู่ระบบ</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar