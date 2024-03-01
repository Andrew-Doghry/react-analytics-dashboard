import Add from "./Add";
import Analytics from "./Analytics";
import NavBar from "./NavBar";
import Orders from "./Orders";
import Sales from "./Sales";
import Shopping from "./Shopping";
import Statistics from "./Statistics";

export default function Dashboard() {
    return (
        <section className="fixed w-[82vw] right-0  h-screen ">
            <NavBar />
            <div className="grid grid-cols-10 gap-4 p-[2rem]">
                <div className="flex flex-col w-full col-span-7  gap-[1rem]">
                    <Statistics />
                    <Sales />
                    <Orders />
                </div>
                <div className="col-span-3 flex flex-col gap-[1rem]">
                    <Analytics />
                    <Shopping />
                    <Add />
                </div>
            </div>


        </section>
    )
}
