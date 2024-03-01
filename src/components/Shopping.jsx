
import { AiOutlineCalendar, AiOutlineShoppingCart, AiFillCaretUp, AiFillCaretDown, AiOutlineUsergroupAdd } from 'react-icons/ai'

export default function Shopping() {
    return (
        <section className="grid grid-cols-2 gap-2 ">
            <div className="flex flex-col p-1 transition rounded-lg h-[7rem] justify-evenly bg-gray-200/50 hover:bg-gray-200/60 ">
                <div className="p-3 text-white bg-blue-400 rounded-lg w-fit" >
                    <AiOutlineShoppingCart className='' />
                </div>
                <span className="self-center mt-1 text-xs font-semibold text-gray-400 uppercase ">online orders</span>
                <div className="flex flex-row items-center justify-between px-2">
                    <span className='text-xs font-bold'>
                        12356
                    </span>
                    <AiFillCaretUp className='text-green-500' />
                    <span className='text-xs font-bold text-green-500'>
                        146
                    </span>
                </div>
            </div>

            <div className="flex flex-col p-1 transition rounded-lg h-[7rem] justify-evenly bg-gray-200/50 hover:bg-gray-200/60 ">
                <div className="p-3 text-white bg-pink-400 rounded-lg w-fit" >
                    <AiOutlineShoppingCart className='' />
                </div>
                <span className="self-center mt-1 text-xs font-semibold text-gray-400 uppercase ">offline orders</span>
                <div className="flex flex-row items-center justify-between px-2">
                    <span className='text-xs font-bold'>
                        12356
                    </span>
                    <AiFillCaretUp className='text-green-500' />
                    <span className='text-xs font-bold text-green-500'>
                        146
                    </span>
                </div>
            </div>

            <div className="flex flex-col p-1 transition rounded-lg h-[7rem] justify-evenly bg-gray-200/50 hover:bg-gray-200/60 ">
                <div className="p-3 text-white bg-yellow-400 rounded-lg w-fit" >
                    <AiOutlineUsergroupAdd className='' />
                </div>
                <span className="self-center mt-1 text-xs font-semibold text-gray-400 uppercase ">total users</span>
                <div className="flex flex-row items-center justify-between px-2">
                    <span className='text-xs font-bold'>
                        78951
                    </span>
                    <AiFillCaretDown className='text-red-500' />
                    <span className='text-xs font-bold text-red-500'>
                        324
                    </span>
                </div>
            </div>

            <div className="flex flex-col p-1 transition rounded-lg h-[7rem] justify-evenly bg-gray-200/50 hover:bg-gray-200/60 ">
                <div className="p-3 text-white bg-black rounded-lg w-fit " >
                    <AiOutlineCalendar className='' />
                </div>
                <span className="self-center mt-1 text-xs font-semibold text-gray-400 uppercase ">total products</span>
                <div className="flex flex-row items-center justify-between px-2">
                    <span className='text-xs font-bold'>
                        1005
                    </span>
                    <AiFillCaretUp className='text-green-500' />
                    <span className='text-xs font-bold text-green-500'>
                        65
                    </span>
                </div>
            </div>




        </section>
    )
}
