import { useLayoutEffect, useState } from 'react'
import { AiOutlineLogout, AiFillCodeSandboxCircle } from 'react-icons/ai'
import linksList from './links'
import { SiAccusoft } from 'react-icons/si'
export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1)
    useLayoutEffect(() => {
        setCurrentLink(() => +window.location.hash.slice(1, 2) || 1)
    }, [])
    return (
        <section className='fixed flex flex-col justify-between h-screen py-5 overflow-hidden w-side bg-sideBackG'>
            <div>
                <div className='flex items-center justify-center gap-1 mb-5 text-sm text-blue-700 '>
                    <AiFillCodeSandboxCircle className='text-md' />
                    <span>Project</span>
                </div>
                <div className='w-[80%] mx-auto ' >
                    <ul className='flex flex-col gap-2 links' >
                        {
                            linksList.map(ele => (
                                <li onClick={() => setCurrentLink(ele.id)} className={currentLink === ele.id ? "sideLink active" : "sideLink"} key={ele.id} >
                                    <a href={`#${ele.id + ele.link}`} >
                                        {ele.icon()}
                                        <span className='overflow-hidden text-nowrap'>{ele.title}</span>
                                    </a>
                                </li>
                            )

                            )
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div className='px-5 py-2 text-sm font-normal text-center text-gray-500 bottom-5 bg-cardBack w-[80%] mx-auto rounded-md'>
                    <SiAccusoft className='mx-auto mt-1 text-2xl font-bold text-blue-700' />
                    <span >
                        unlock more info <br />
                        ow! Upgrade to <strong className='text-sm text-black'>PRO</strong>
                    </span>
                </div>
                <div className=' mt-5 w-[80%] bg-red-500 text-white mx-auto rounded-md hover:bg-red-500/50 transition hover:text-red-700' >
                    <a href="#logout" className='flex items-center justify-center'>
                        <AiOutlineLogout className='' />
                        log out
                    </a>

                </div>
            </div>
        </section >
    )
}
