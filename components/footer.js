
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function footer() {
  return (
    <div className='bg-zinc-800 w-full p-[2rem] justify-center text-center text-white'>
        <div>
            <h2>ติดตามขอมูลใหม่ๆได้ที่</h2>
        </div>
        <div className='w-[12rem] mx-auto grid grid-cols-4 gap-2 pt-1'>
            <Link href="https://discord.gg/QAErmPWY">
                <box-icon name='discord-alt' type='logo' color='#ffffff' ></box-icon>
            </Link>
            <Link href="https://www.facebook.com/rattasak.gza.5">
                <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
            </Link>
            <Link href="https://github.com/Teemo4621">
                <box-icon name='github' type='logo' color='#ffffff' ></box-icon>
            </Link>
            <Link href="https://www.instagram.com/_zemonnub_/">
                <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
            </Link>
        </div>
        <div class="w-[200px] border-b border-white mx-auto p-2"></div>
    </div>
  )
}

export default footer