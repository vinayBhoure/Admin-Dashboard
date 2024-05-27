import { BsSearch } from "react-icons/bs"
import Sidebar from "../components/Sidebar"
import { FaRegBell } from "react-icons/fa"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"

function Dashboard() {
  return (
    <div className="grid grid-cols-5 h-[100vh] bg-[#f7f7f7]">

      {/* Sidebar */}
      <Sidebar />

      {/* /Main */}
      <main className="col-span-4 overflow-y-auto">
        <div className={` h-[4rem] flex items-center py-0 px-1 border-b border-slate-300 gap-1`}
        >
          <BsSearch size={'1.2rem'} opacity={'0.7'} />
          <input type="text" placeholder="Searcg for data, users, docs" className="mr-auto bg-[#f7f7f7] w-full py-4 px-0 " />
          <FaRegBell />
          <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
        </div>

        <section className="flex justify-between items-stretch gap-8 p-8">
     <WidgetItem percent={40} heading="revenue" value={30000} amount={true} color="blue"/>
     <WidgetItem percent={40} heading="revenue" value={30000} amount={true} color="blue"/>
     <WidgetItem percent={40} heading="revenue" value={30000} amount={true} color="blue"/>
        </section>
      </main>
    </div>
  )
}

interface WidgetProps {
  heading: string,
  value: number,
  percent: number,
  color: string,
  amount?: boolean
}
const WidgetItem = ({heading, value, percent, amount, color}: WidgetProps) => <article className="w-48 bg-white shadow-inner rounded p-2 flex justify-between items-stretch">
  <div className="">
    <p className="text-sm opacity-70">{heading}</p>
    <h3 className="text-2xl">{amount ?  `$${value}` : value}</h3>
    {
      percent > 0 ? <span className="text-green-500 flex items-center text-xs"><HiTrendingUp/> +{percent}%</span>
      : <span className="text-red-500"><HiTrendingDown/> {percent}%</span>
    }
  </div>
  <div className="w-[4rem] rounded-full grid relative place-items-center">
<span className={`text-${color}`}>{percent}%</span>
  </div>
</article>

export default Dashboard
