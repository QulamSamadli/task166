import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='container flex items-center justify-between py-4'>
            <div > <NavLink className="text-[36px] font-bold text-black" to="/">Logo</NavLink></div>
            <nav className='flex gap-2 font-medium'>
                <NavLink to="/haqqimizda">Haqqımızda</NavLink>
                <NavLink to="/kitablar">Kitablar</NavLink>
                <NavLink to="/imtahanlar">İmtahanlar</NavLink>
                <NavLink to="/elaqe">Bizimlə əlaqə</NavLink>
            </nav>
            <div className='flex gap-2'>
                <NavLink className="border p-2 rounded-xl hover:bg-black hover:text-white  duration-500" to="/daxilol">Daxil ol</NavLink>
                <NavLink className="border p-2 rounded-xl bg-black text-white hover:bg-white hover:text-black duration-500" to="/qeydiyyat">Qeydiyyat</NavLink>
            </div>
        </header>
    )
}

export default Navbar