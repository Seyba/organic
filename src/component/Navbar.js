import {  useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
// import {
//   Bars3Icon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
//import { Badge} from "@material-tailwind/react";

export const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const styleBr = {fontFamily: 'Caveat', fontSize: '50px'}

  return (
    <header className="bg-white-100 px-2">
      <nav className="mx-auto lg:px-2 max-w-7xl flex  items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <div className="flex items-center justify-center">
            <div>
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Big Dream Farm</span>
                <img src="/images/logo.png" className="h-14 w-14" alt="logo"/>
              </Link>
            </div>
            <div className="ml-2 hidden sm:block">
              <h3 className="uppercase font-bold tracking-tight">Soumppou</h3>
              <h3 className="uppercase font-bold tracking-tight">Kaffo</h3>
              <h3 className="uppercase font-bold tracking-tight">Farm</h3>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link className="text-xl font-semibold leading-6 text-green-800" to="/">Home</Link>
          <Link 
            to="/about" 
            className="text-xl font-semibold leading-6 text-green-800"
          >
            About Us
          </Link>
          <Link to="/shop" className="text-xl font-semibold leading-6 text-green-800">
            Shop
          </Link>
          <Link to="/contact" className="text-xl font-semibold leading-6 text-green-800">
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-4 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </Link>
          <Link to="/account">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-4 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </Link>
          <div>
            <Link 
              to="/shop/cart"
              onClick={() => setOpenCart(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Big Dream Farm</span>
             <img src="/images/logo.png" className="h-14 w-14" alt="logo"/>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to="/shop"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shop
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6 ">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to="/account"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Account
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}