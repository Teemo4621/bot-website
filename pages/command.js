//nextJs FunctionList

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//react FunctionList
import { useEffect } from "react";

///components
import Navbar from "../components/navbar";
import Footer from "../components/footer";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";


//styles
import Style from "../styles/Home.module.css";

function command() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZEMOB BOT | Command Page</title>
        <meta name="description" content="ZEMOB BOT | Discord สำหรับทุกคน" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>

      <Navbar />

      <main>
        <div className="text-white px-8">
          <div className="w-full mx-auto pt-[8rem] sm:w-[80%]">
            <div className="text-lg mb-6">
              <h2 className="text-xl text-[#fdbb2e]">Admin Commands</h2>
              <p className="text-sm text-[#d4d4d4]">คำสั่งที่มีเเต่Adminเท่านั้นที่ใช้ได้</p>
            </div>
            <table className="bg-white rounded-md w-full">
              <thead className="">
                <tr className="text-black">
                  <th aria-sort="ascending" class="p-2">
                    คำสั่ง
                  </th>
                  <th aria-sort="ascending" class="p-2">
                    รายละเอียด
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#fcc550]">
                <tr className="border-b border-white">
                  <th className='px-2 py-4'>/remove-messages</th>
                  <th className='px-2 py-4'>ลบข้อความของห้องหรือคนที่คุณต้องการ</th>
                </tr>
                <tr className="border-b border-white">
                  <th className='px-2 py-4'>/verify-create</th>
                  <th className='px-2 py-4'>สร้างช่องการยินยันตัวตนก่อนเข้า Server ของคุณ</th>
                </tr>
                <tr className="border-b border-white">
                  <th className='px-2 py-4'>/welcome-message-setup</th>
                  <th className='px-2 py-4'>สร้างข้อความต้อนรับผู้เข้าใหม่เเละออก</th>
                </tr>
                <tr>
                  <th className='px-2 py-4'>/welcome-message-remove</th>
                  <th className='px-2 py-4'>ลบข้อความต้อนรับผู้เข้าใหม่เเละออก</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full mx-auto pt-[4rem] sm:w-[80%]">
            <div className="text-lg mb-6">
              <h2 className="text-xl text-[#fdbb2e]">Game Commands</h2>
              <p className="text-sm text-[#d4d4d4]">คำสั่งที่เกียวกับเกมต่างๆ</p>
            </div>
            <table className="bg-white rounded-md w-full">
              <thead className="">
                <tr className="text-black">
                  <th aria-sort="ascending" class="p-2">
                    คำสั่ง
                  </th>
                  <th aria-sort="ascending" class="p-2">
                    รายละเอียด
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#fcc550]">
                <tr className="border-b border-white">
                  <th className='px-2 py-4'>/roblox-profile</th>
                  <th className='px-2 py-4'>ดุข้อมูลROBLOXของคนที่คุณต้องการ</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full mx-auto pt-[4rem]  pb-[8rem] sm:w-[80%]">
            <div className="text-lg mb-6">
              <h2 className="text-xl text-[#fdbb2e]">Users Commands</h2>
              <p className="text-sm text-[#d4d4d4]">คำสั่งที่มีใช้ได้ทั่วไป</p>
            </div>
            <table className="bg-white rounded-md w-full">
              <thead className="">
                <tr className="text-black">
                  <th aria-sort="ascending" class="p-2">
                    คำสั่ง
                  </th>
                  <th aria-sort="ascending" class="p-2">
                    รายละเอียด
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#fcc550]">
                <tr className="border-b border-white">
                  <th className='px-2 py-4'>/ping</th>
                  <th className='px-2 py-4'>เช็กปิงของBOT</th>
                </tr>
                <tr className="border-b border-white">
                  <th className='px-2 py-4'>/search-image</th>
                  <th className='px-2 py-4'>ค้นหารูปภาพจาก Google</th>
                </tr>
                <tr className="border-b border-white">
                  <th className='px-2 py-4'>/server-info</th>
                  <th className='px-2 py-4'>ดุข้อมูลของ Server</th>
                </tr>
                <tr className="border-b border-white">
                  <th className='px-2 py-4'>/userinfo</th>
                  <th className='px-2 py-4'>ดุข้อมูลของ ของผู้ใช้ที่คุณต้องการ</th>
                </tr>
                <tr>
                  <th className='px-2 py-4'>/userprofile</th>
                  <th className='px-2 py-4'>ดุรูปโปรไฟล์ ของผู้ใช้ที่คุณต้องการ</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default command;
