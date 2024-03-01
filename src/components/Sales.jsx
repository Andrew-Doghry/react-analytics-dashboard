
import { AiFillCaretDown } from 'react-icons/ai'
import { AreaChart, Tooltip, Area, ResponsiveContainer } from 'recharts'

export default function Sales() {
    return (
        <section className="flex flex-col h-[18rem]">
            <div className="flex flex-row items-center justify-between">
                <span className="font-extrabold capitalize "> sales overview</span>
                <button className='flex items-center gap-1 px-2 py-1 text-sm font-normal rounded-md bg-blue-200/50'>
                    Monthly
                    <AiFillCaretDown />
                </button>
            </div>
            <div className='h-[15rem] w-full' >
                <ResponsiveContainer width='100%' height='100%' >
                    <AreaChart
                        width={500}
                        height={500}
                        data={data}
                        margin={{
                            top: 10
                        }
                        }
                    >
                        <defs>
                            <linearGradient id='colorview' x1={0} y1={0} x2={0} y2={1}>
                                <stop offset={'30%'} stopColor='#668DFF' stopOpacity={0.4} />
                                <stop offset={'85%'} stopColor='#D4E0FF' stopOpacity={0.2} />
                            </linearGradient>
                        </defs>
                        <Tooltip cursor={false} />
                        <Area
                            type={'monotone'}
                            dataKey={"data1"}
                            stroke='#668Dff'
                            strokeWidth={2}
                            fill='url(#colorview)'
                        >
                        </Area>
                        <Area
                            type={'monotone'}
                            dataKey={"data2"}
                            stroke='#668Dff'
                            strokeWidth={2}
                            fill='url(#colorview)'
                        >
                        </Area>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section >
    )
}



const data = [
    {
        data2: 2000,
        data1: 2400,
    },
    {
        data2: 4000,
        data1: 1398,
    },
    {
        data2: 5000,
        data1: 12800,
    },
    {
        data2: 8700,
        data1: 3908,
    },
    {
        data2: 9890,
        data1: 4800,
    },
    {
        data2: 11390,
        data1: 3800,
    },
    {
        data2: 3490,
        data1: 4300,
    },
]