import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layaout() {
  return (
    <div className=' mx-auto'>
         <nav className=' bg-slate-200 py-4 border'>
          <div className=' container mx-auto flex justify-evenly items-center text-2xl font-bold'>
          <NavLink   className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to={'/'}>Home</NavLink>
            <NavLink   className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to={'/products'}>Products</NavLink>
            <NavLink   className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to={'/category'}>Categories</NavLink>
          </div>

        </nav>
        <main className='container mx-auto py-12 px-14'>
            <Outlet />
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Layaout