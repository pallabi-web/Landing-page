import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50  shadow-lg backdrop-blur-sm ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div className="text-4xl text-orange-600 font-extrabold" >
            FOODIE
          </div>
            <div className="hidden md:flex space-x-8 text-lg font-medium">
              <Link href="#home" className="text-black hover:text-orange-600 transition duration-150">
                About
              </Link>
              <Link href="#about" className="text-black hover:text-orange-600 transition duration-150">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-black hover:text-orange-600 transition duration-150">
                Testimonials
              </Link>
              <Link href="#contact" className="text-black hover:text-orange-600 transition duration-150">
                Contact
              </Link>
            </div>
             
            </div>

          </div>
    </nav>
    );
}
