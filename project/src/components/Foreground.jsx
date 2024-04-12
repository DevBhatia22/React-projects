import React, { useRef, useState, useEffect } from 'react'
import Card from './Card'
import { MdOutlinePages } from "react-icons/md";

function Foreground() {
    const data = [
        {
            data : "Hello world",
            title : "Dev"
        }
    ]
    const adder = useRef(1);
    const boundry = useRef(2);
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");
    const [localStorageData, setLocalStorageData] = useState([]);
    useEffect(() => {
        const data = Object.entries(localStorage);
        setLocalStorageData(data);
    }, []);
    return (
    <>
        <div ref={boundry} className='fixed w-full h-screen p-4'>
            <div className='flex gap-4'>
                {localStorageData.map(([key, value]) => {
                    return(
                        <Card data = {value} title = {key} set = {setLocalStorageData} boundry = {boundry}/>
                    )
                })}
            </div>
            <button className='absolute bottom-0 right-1/2 translate-x-[50%] bg-[#EEEEEE] w-20 h-10 rounded-full text-[#00ADB5] hover:bg-[#217e85] hover:text-[#EEEEEE] transition-all duration-400 mb-4' onClick={()=>{
                adder.current.classList.toggle('hidden');
            }}> Add </button>
            <div ref={adder} className='bottom-0 left-0 absolute w-full h-48 md:h-20 bg-[#00ADB5] flex md:flex-row flex-col gap-4 items-center justify-around p-4 left- hidden'>
                <input value={title} className='p-1 h-2/3 border-none outline-none bg-[#EEEEEE] leading-tight -tracking-tighter text-[#00ADB5] selection:text-[#FFC470] rounded-sm w-96' placeholder='Title' onChange={(e)=>{
                    setTitle(e.target.value);
                }}></input>
                <input value={discription} className='p-1 h-2/3 border-none outline-none bg-[#EEEEEE] leading-tight -tracking-tighter text-[#00ADB5] selection:text-[#FFC470] rounded-sm w-full md:w-[40rem]' placeholder='Discription' onChange={(e)=>{
                    setDiscription(e.target.value);
                }}></input>
                <button className='bg-[#EEEEEE] w-20 h-2/3 rounded-full text-[#00ADB5] hover:bg-[#217e85] hover:text-[#EEEEEE] transition-all duration-400' onClick={()=>{
                    localStorage.setItem(title, discription);
                    const data = Object.entries(localStorage);
                    setLocalStorageData(data);
                    adder.current.classList.toggle('hidden');
                }}> Add </button>
                <span onClick={()=>{
                    adder.current.classList.toggle('hidden');
                }}>
                    <MdOutlinePages />
                </span>
                
            </div>
        </div>
    </>
  )
}

export default Foreground