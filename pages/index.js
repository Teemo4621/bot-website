//nextJs FunctionList

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//react FunctionList
import { useEffect } from "react";

///components

import logo from "../assets/r9i4b4833xm21.jpg";
import donatmeplss from "../assets/d5076f862c6fbd99edb912899db946cd.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FunctionList from "../components/cardContent";

//Llibrary
import AOS from "aos";
import "aos/dist/aos.css";

import Style from "../styles/Home.module.css";

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>ZEMOB BOT | Home Page</title>
                <meta name="description" content="ZEMOB BOT | Discord สำหรับทุกคน" />
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                ></link>
            </Head>

            <Navbar />

            <main className="main">
                <div className="content text-white ">
                    <div className="top-side items-center justify-between container mx-auto py-[12rem] lg:flex lg:p-[12rem] lg:h-[100vh]">
                        <div
                            className="info w-[29em] h-[10em] mx-auto items-center "
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <div className="text-info">
                                <h3 className="text-4xl font-bold glowing">ZEMOBBOT</h3>
                                <p className="text-xl">
                                    บอทDiscordที่จะจัดการเซิฟเวอร์ของคุณให้มีความสวยงามมากขี้นเเละยังมีฟิวเจอร์อืนๆอีกมากมายให้ได้ลอง
                                </p>
                            </div>
                            <div className="invete-bot mt-4">
                                <Link
                                    href="https://discord.com/api/oauth2/authorize?client_id=960878492076105748&permissions=8&scope=bot"
                                    className="text-xl shadow font-bold border-2 border-white rounded-lg px-4 py-2 duration-150 hover:bg-[#fecb5c] hover:text-black hover:border-[#fecb5c]"
                                >
                                    + Invete
                                </Link>
                            </div>
                        </div>
                        <div className="right-info">
                            <div
                                className="thubnuil w-[19em] mx-auto hidden lg:block"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                <Image
                                    src={logo}
                                    alt="ZEMOBBOTLOGO"
                                    className="w-full rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={Style.main_side}>
                        <ul className="features-bot px-6 py-[4rem] grid grid-cols-1 gap-x-12 container mx-auto text-[#FFF] lg:grid-cols-2">
                            <FunctionList
                                title="เปิดเพลงจากYoutubeเเละSpotify"
                                des="สามารถเรียกให้บอลเปิดเพลงจากYoutubeเเละSpotifyให้คุณฟังในห้องพูดคุยได้"
                                image={logo}
                                link=""
                            />
                            <FunctionList
                                title="สร้างห้องคุยกับเพื่อนของคุณในคลิกเดียว"
                                des="สามารถเรียกให้บอลเปิดเพลงจากYoutubeเเละSpotifyให้คุณฟังในห้องพูดคุยได้"
                                image=""
                                link=""
                            />
                            <FunctionList
                                title="สร้างห้องverification"
                                des="สามารถเรียกให้บอลเปิดเพลงจากYoutubeเเละSpotifyให้คุณฟังในห้องพูดคุยได้"
                                image=""
                                link=""
                            />
                            <FunctionList
                                title="สร้างข้อความต้อนรับผู้เข้าใหม่"
                                des="สามารถเรียกให้บอลเปิดเพลงจากYoutubeเเละSpotifyให้คุณฟังในห้องพูดคุยได้"
                                image=""
                                link=""
                            />
                        </ul>
                    </div>
                    <div className="status-side my-2 flex h-[20rem] text-center px-4 py-2 justify-center items-center">
                        <div className="status-wrapper">
                            <div
                                className="status-header"
                                data-aos="fade-up"
                                data-aos-delay="50"
                            >
                                <h3 className="text-3xl">ZEMOB Status</h3>
                                <hr width="150px" className="mx-auto pt-2" />
                                <p className="text-sm">เพื่อนๆของZEMOBทั้งหมด</p>
                            </div>
                            <div className="status-bot grid grid-cols-3 mx-auto w-[20rem] justify-items-center">
                                <div
                                    className="st-servers text-xl"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <box-icon
                                        name="server"
                                        animation="flashing"
                                        color="#ffffff"
                                    ></box-icon>
                                    <p></p>
                                    <h4>Servers</h4>
                                </div>
                                <div
                                    className="st-members text-xl"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    <box-icon
                                        name="user"
                                        animation="flashing"
                                        color="#ffffff"
                                    ></box-icon>
                                    <p></p>
                                    <h4>Members</h4>
                                </div>
                                <div
                                    className="st-playing text-xl"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <box-icon
                                        name="playlist"
                                        type="solid"
                                        animation="flashing"
                                        color="#ffffff"
                                    ></box-icon>
                                    <p></p>
                                    <h4>Playing</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="donation-side flex bg-[#F6F5FF] w-full h-[24rem] items-center">
                        <div className="donation-data container mx-auto px-4 py-2">
                            <div className="title-dt text-black text-center">
                                <h3 className="font-bold text-2xl mx-2">Donation</h3>
                            </div>
                            <div className="text-dt text-black w-[13em] items-center text-center mx-auto my-4">
                                <Image src={donatmeplss} alt="" className="rounded-t-lg" />
                                <a
                                    href=""
                                    className="h-6 w-full px-4 py-6 bg-[#fcc550] text-white flex flex-wrao items-center justify-center rounded-b-lg font-bold hover:bg-[#fecb5c]"
                                >
                                    สนับสนุนผมได้ที่นี้เลย!!!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
            </main>

            <Footer />
        </div>
    );
}
