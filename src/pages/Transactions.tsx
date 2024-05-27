
import Sidebar from "../components/Sidebar"
function Transactions() {
  return (
    <div className="grid grid-cols-5 h-[100vh] bg-slate-200">
       
    {/* Sidebar */}
    <Sidebar />

    {/* /Main */}
    <main className="col-span-4"> 
     Transacation
    </main>
 </div>
  )
}

export default Transactions
