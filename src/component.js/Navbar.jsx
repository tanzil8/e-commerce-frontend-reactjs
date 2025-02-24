"use client"

import { useState } from "react"






import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { Heart, ShoppingCartIcon } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Logo Here.
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/category" className="hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Category
              </Link>
              <Link href="/collections" className="hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Collections
              </Link>
              <Link href="/contact" className="hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Button variant="ghost" size="icon">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-pink-500 rounded-full h-4 w-4 flex items-center justify-center text-xs">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="relative mr-2">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-pink-500 rounded-full h-4 w-4 flex items-center justify-center text-xs">
                3
              </span>
            </Button>
            <div open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <div asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
              <div side="right" className="w-[300px] sm:w-[400px] bg-gray-900 text-white">
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="hover:text-gray-200 text-xl" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/category" className="hover:text-gray-200 text-xl" onClick={() => setIsMenuOpen(false)}>
                    Category
                  </Link>
                  <Link
                    href="/collections"
                    className="hover:text-gray-200 text-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Collections
                  </Link>
                  <Link href="/contact" className="hover:text-gray-200 text-xl" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </nav>
                <div className="mt-8">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-[6.5rem] transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <User className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

