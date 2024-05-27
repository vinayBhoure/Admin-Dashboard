import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Products = lazy(() => import('./pages/Products'))
const Transactions = lazy(() => import('./pages/Transactions'))
const Customers = lazy(() => import('./pages/Customers'))

function App() {


  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/products' element={<Products />} />
        <Route path='/admin/transactions' element={<Transactions />} />
        <Route path='/admin/customers' element={<Customers />} />
      </Routes>
    </Suspense>
  )
}

export default App
