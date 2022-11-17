import React from 'react'
import Image from 'next/image'

function cardContent(msg) {
  return (
    <li className="features-box-list relative flex flex-wrap w-full mx-auto my-4 rounded-3xl text-center items-center item-start select-none cursor-pointer hover:opacity-80 duration-150 hover:scale-[.95] hover:text-[#4C4E67]">
    <div className="image-box w-[132px] h-[132px] bg-neutral-700 rounded-3xl overflow-hidden">
        <Image src={msg.image} alt="" className="" />
    </div>
    <div className="description-box w-[63%] py-2 mx-auto">
        <div className="title">
            <h3 className="text-xl glowing font-bold">{msg.title}</h3>
            <p className="text-basem glowing font-light">{msg.des}</p>
        </div>
    </div>
    <a href={msg.link} className="opacity-0 absolute inset-0"></a>
</li>
  )
}

export default cardContent