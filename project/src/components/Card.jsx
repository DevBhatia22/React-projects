import React from 'react'
import { MdOutlinePages } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion"

function Card(props) {
  return (
    <>
        <motion.div drag dragConstraints = {props.boundry} className=' relative w-64 h-80 rounded-2xl bg-[#393E46] text-white p-4 space-y-4 selection:text-[#FFC470] overflow-hidden hover:text-yellow-500'>
            <MdOutlinePages onClick={()=>{
                console.log(props.title);
                localStorage.removeItem(props.title);
                const data = Object.entries(localStorage);
                props.set(data);
            }}/>
            <p className='leading-tight text-sm font-semibold'>{props.data}</p>
            <div className='absolute w-full h-16 bg-[#00ADB5] bottom-0 left-0 flex items-center justify-between p-4 selection:text-white'>
                <h5 className='opacity-80'>{props.title}</h5>
                <AiOutlineDownload className='hover:cursor-pointer' onClick={() => {
                    navigator.clipboard.writeText(props.title + " : " + props.data);
                }}/>
            </div>
        </motion.div>
    </>
  )
}

export default Card