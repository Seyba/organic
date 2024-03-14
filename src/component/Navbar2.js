import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Dresses', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Denim', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
    ],
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export const Navbar2 = () => {
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
                                        <Link className="text-lg font-medium text-green-900 hover:text-green-950" to="/">Home</Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link className="text-lg font-medium text-green-900 hover:text-green-950" to="/about">About Us</Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link className="text-lg font-medium text-green-900 hover:text-green-950" to="/contact">Contact</Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link className="text-lg font-medium text-green-900 hover:text-green-950" to="/shop">Shop</Link>
                                    </div>
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <Link to="/" className="-m-2 block p-2 text-lg font-medium text-green-900 hover:text-green-950">
                                            Sign in
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link to="/" className="-m-2 block p-2 text-lg font-medium text-green-900 hover:text-green-950">
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
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="flex justify-between h-16 items-center">
                            {/* <button
                                type="button"
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button> */}

                            {/* Logo */}
                            <div className="ml-2 flex lg:ml-0">
                                <div className="flex items-center">
                                    <Link to="/">
                                        <img src="/images/logo.png" alt="logo" className="h-14 w-14"/>
                                    </Link>
                                    <div className="pl-2 ">
                                        <h4 className="text-xs uppercase font-bold tracking-tight">Soumppou</h4>
                                        <h4 className="text-xs uppercase font-bold tracking-tight">Kaffo</h4>
                                        <h4 className="text-xs uppercase font-bold tracking-tight">Farm</h4>
                                    </div>
                                </div>
                            </div>

                        {/* Flyout menus */}
                            {/* <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    
                                </div>
                            </Popover.Group> */}

                            <div className="flex ml-24 items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
                                    <Link to="/" className="text-lg font-semibold text-green-800 hover:text-green-950">
                                        Home
                                    </Link>
                                    
                                    <Link to="/about" className="text-lg font-semibold text-green-800 hover:text-green-950">
                                        About Us
                                    </Link>
                                    <Link to="/shop" className="text-lg font-semibold text-green-800 hover:text-green-950">
                                        Shop
                                    </Link>
                                    <Link to="/contact" className="text-lg font-semibold text-green-800 hover:text-green-950">
                                        Contact Us
                                    </Link>
                                </div>

                                {/* <div className="hidden lg:ml-8 lg:flex">
                                    
                                </div> */}

                                {/* Search */}
                                {/* <div className="flex lg:ml-6">
                                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                </div> */}
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

                                        {/* <ShoppingBagIcon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">3</span>
                                        <span className="sr-only">items in cart, view bag</span> */}
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