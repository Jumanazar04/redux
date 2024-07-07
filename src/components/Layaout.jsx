import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layaout() {
  return (
    <div className='container mx-auto'>
         <nav className=' flex justify-evenly items-center text-2xl font-bold bg-slate-200 py-4 border'>
            <NavLink   className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to={'/'}>Home</NavLink>
            <NavLink   className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to={'/products'}>Products</NavLink>
            <NavLink   className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to={'/category'}>Categories</NavLink>
        </nav>
        <main>
            <Outlet />
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default Layaout