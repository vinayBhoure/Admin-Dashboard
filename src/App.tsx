import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Products = lazy(() => import('./pages/Products'))
const Transactions = lazy(() => import('./pages/Transactions'))
const Customers = lazy(() => import('./pages/Customers'))
const AddNewProduct = lazy(() => import('./pages/Managements/AddNewProduct'))
const ProductManagement = lazy(() => import('./pages/Managements/ProductManagement'))
const TransactionManagement = lazy(() => import('./pages/Managements/TransactionManagement'))

function App() {


  return (<div>
    {/* <Sidebar/> */}
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/products' element={<Products />} />
        <Route path='/admin/transactions' element={<Transactions />} />
        <Route path='/admin/customers' element={<Customers />} />

        {/* Management */}
        <Route path='/admin/product/new' element={<AddNewProduct />} />
        <Route path='/admin/product/:id' element={<ProductManagement />} />
        <Route path='/admin/transaction/:id' element={<TransactionManagement />} />
      </Routes>
    </Suspense>
  </div>
  )
}

export default App
