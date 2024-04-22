import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    return(
        <div className="bg-white">
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex justify-between px-4 pb-2 py-2">
                                    <img src="/images/logo.png" className="h-14 w-14" alt="logo"/>
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close menu</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#08262a" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>                                    
                                </div>

                                {/* Links */}
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <Link 
                                            className="text-lg font-medium text-green-900 hover:text-green-950" 
                                            to="/"
                                            onClick={() => setOpen(false)}
                                        >
                                            Home
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link 
                                            className="text-lg font-medium text-green-900 hover:text-green-950" 
                                            to="/about"
                                            onClick={() => setOpen(false)}
                                        >
                                            About Us
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link 
                                            className="text-lg font-medium text-green-900 hover:text-green-950" 
                                            to="/contact"
                                            onClick={() => setOpen(false)}
                                        >
                                            Contact
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link 
                                            className="text-lg font-medium text-green-900 hover:text-green-950" 
                                            onClick={() => setOpen(false)} 
                                            to="/products"
                                        >
                                            Shop
                                        </Link>
                                    </div>
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <Link 
                                            to="/login" 
                                            className="-m-2 block p-2 text-lg font-medium text-green-900 hover:text-green-950"
                                            onClick={() => setOpen(false)}
                                        >
                                            Sign in
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link 
                                            to="/" 
                                            className="-m-2 block p-2 text-lg font-medium text-green-900 hover:text-green-950"
                                            onClick={() => setOpen(false)}
                                        >
                                            Create account
                                        </Link>
                                    </div>
                                </div>
                                
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <header className="relative bg-white py-2">
                <nav aria-label="Top" className="mx-auto px-4 max-w-7xl  sm:px-6 lg:px-8">
                    <div className="">
                        <div className="flex justify-between h-16 items-center">
                            {/* Logo */}
                            <div className="ml-2 flex lg:ml-0">
                                <div className="flex items-center">
                                    <Link to="/">
                                        <img src="/images/logo.png" alt="logo" className="h-14 w-14"/>
                                    </Link>
                                    <div className="pl-2 ">
                                        <h4 className="text-xs uppercase font-bold text-green-800 tracking-tight">Soumppou</h4>
                                        <h4 className="text-xs uppercase font-bold text-green-800 tracking-tight">Kaffo</h4>
                                        <h4 className="text-xs uppercase font-bold text-green-800 tracking-tight">Farm</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Flyout menus */}
                            <div className="flex ml-24 items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
                                    <Link to="/" className="text-lg font-semibold text-green-800 hover:text-green-950">
                                        Home
                                    </Link>
                                    
                                    <Link to="/about" className="text-lg font-semibold text-green-800 hover:text-green-950">
                                        About Us
                                    </Link>
                                    <Link to="/products" className="text-lg font-semibold text-green-800 hover:text-green-950">
                                        Shop
                                    </Link>
                                    <Link to="/contact" className="text-lg font-semibold text-green-800 hover:text-green-950">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className="lg:hidden">
                                    <Link onClick={() => setOpen(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#08262a" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            {/* Cart */}
                            <div className="flow-root hidden lg:block">
                                <button className="navbar-cart-btn border border-1 rounded-3xl py-1 px-4">
                                    <Link to="/"  className="group -m-2 flex justify-between items-center p-2">
                                        <div className="bg-green-950 rounded-full p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </div>
                                        <div className="ml-2">
                                            <h2 className="navbar-cart leading-9 font-bold">Cart 0</h2>
                                        </div>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}