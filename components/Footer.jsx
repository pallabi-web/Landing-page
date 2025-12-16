import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 xl:gap-16 border-b border-gray-700 pb-10">
          
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Foodie</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing customers closer with yummy food.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2 text-sm">
              <p>123 Dev Street, Raj Nagar</p>
              <p>Mumbai, 80045</p>
              <p>Email: <a href="mailto:info@yourbrand.com" className="hover:text-blue-400">info@foodie.com</a></p>
              <p>Phone: +91 6367425797</p>
            </address>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8">
          <p className="text-center text-sm text-gray-400 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} Foodie. All rights reserved.
          </p>
        </div>
        </div>

        
    </footer>
  );
};
   