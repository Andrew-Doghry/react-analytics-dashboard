import { AiFillTag, AiFillExperiment, AiFillDollarCircle, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"


export default function Statistics() {
    return (
        <section className="flex gap-4 ">
            <div className="flex flex-col w-1/3 gap-2 p-4 rounded-lg bg-blue-300/50 hover:scale-[110%] transition">
                <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                    <div className="p-4 bg-white border border-black rounded-lg border-1 w-fit">
                        <AiFillTag />
                    </div>
                    <div className="text-xs font-semibold">$121.414,700</div>
                </div>
                <div className="flex flex-col items-center justify-evenly md:flex-row">
                    <span className="text-sm font-semibold text-gray-500 capitalize">total sales</span>
                    <span className="text-green-600">+18%</span>
                    <AiOutlineArrowUp className="text-green-600" />
                </div>
            </div>
            <div className="flex flex-col w-1/3 gap-2 p-4 rounded-lg bg-red-300/50 hover:scale-[110%] transition">
                <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                    <div className="p-4 bg-white border border-black rounded-lg border-1 w-fit">
                        <AiFillExperiment />
                    </div>
                    <div className="text-xs font-semibold">$123.234,345</div>
                </div>
                <div className="flex flex-col items-center justify-evenly md:flex-row">
                    <span className="text-sm font-semibold text-gray-500 capitalize">total expenses</span>
                    <span className="text-red-600">-9%</span>
                    <AiOutlineArrowDown className="text-red-600" />
                </div>
            </div>
            <div className="flex flex-col w-1/3 gap-2 p-4 rounded-lg bg-orange-200/50 hover:scale-[110%] transition">
                <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                    <div className="p-4 bg-white border border-black rounded-lg border-1 w-fit">
                        <AiFillDollarCircle />
                    </div>
                    <div className="text-xs font-semibold">$121.414,700</div>
                </div>
                <div className="flex flex-col items-center justify-evenly md:flex-row">
                    <span className="text-sm font-semibold text-gray-500 capitalize">total revenue</span>
                    <span className="text-green-600">+24%</span>
                    <AiOutlineArrowUp className="text-green-600" />
                </div>
            </div>

        </section>
    )
}
