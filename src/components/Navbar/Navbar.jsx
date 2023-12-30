import { NavLink } from 'react-router-dom';
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logo from '../../assets/assets/logo.svg'
import { useState } from 'react';

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const navLinks = [
        { id: 1, name: 'HOME', link: '/' },
        { id: 2, name: 'ABOUT', link: '/about' },
        { id: 3, name: 'LOGIN', link: '/login' },
        { id: 4, name: 'REGISTER', link: '/register' }
    ]
    return (
        <nav className='relative shadow-lg'>
            <div className="flex justify-between items-center">
                <div className="lg:hidden" onClick={() => setOpen(!open)}>
                   {
                    open? <IoMdClose className='text-3xl'/> :<IoMdMenu className='text-3xl'/>
                   } 
                </div>
                {/* Left */}
                <div className="">
                    <img className='w-24' src={logo} alt="" />
                </div>
                {/*  */}
                <div className="hidden lg:block">
                    <ul className='flex items-center gap-5'>
                        {
                            navLinks.map(data => (
                                <li key={data.id}>
                                    <NavLink
                                        to={data.link}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        {data.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/*  */}
                <div className=""></div>
            </div>
            <ul className={`absolute bg-white z-10 space-y-4 px-5 py-2 shadow-lg ${open? "" : "hidden"}`}>
                {
                    navLinks.map(data => (
                        <li key={data.id}>
                            <NavLink
                                to={data.link}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                {data.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;