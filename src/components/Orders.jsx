
import { } from 'react-icons/ai'
import appleWatch from '../assets/watch.png'
export default function Orders() {
    return (
        <section className="flex flex-col h-[18rem]">
            <div className="flex flex-row items-center justify-between ">
                <span className="text-lg font-bold capitalize">recent order</span>
                <span className="text-lg text-blue-400 uppercase cursor-pointer">see all</span>
            </div>
            <div className="flex flex-row w-full gap-2 px-3 py-3 ">
                <div className="flex flex-col items-center justify-center w-1/5 gap-2">
                    <span className="text-sm font-bold capitalize">
                        tracking ID
                    </span>
                    <span className="text-xs text-gray-500">#9876543</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/5 gap-2">
                    <span className="text-sm font-bold capitalize">
                        product name
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                        <img src={appleWatch} className='w-[15px] h-[15px] ' alt="" />
                        apple watch
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/5 gap-2">
                    <span className="text-sm font-bold capitalize">
                        date
                    </span>
                    <span className="text-xs text-gray-500">Jul 29, 2021</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/5 gap-2">
                    <span className="text-sm font-bold capitalize">
                        price
                    </span>
                    <span className="text-xs text-gray-500">$329</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/5 gap-2">
                    <span className="text-sm font-bold capitalize">
                        status
                    </span>
                    <span className="p-1 text-xs text-blue-500 rounded-md bg-blue-500/20 w-fit">complete</span>
                </div>
            </div>
        </section>
    )
}
