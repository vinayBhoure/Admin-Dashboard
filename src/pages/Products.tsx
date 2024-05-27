import Sidebar from "../components/Sidebar"
const Products = () => {
  return (
    <div className="grid grid-cols-5 h-[100vh] bg-slate-200">
       
    {/* Sidebar */}
    <Sidebar />

    {/* /Main */}
    <main className="col-span-4"> 
     products
    </main>
 </div>
  )
}

export default Products
