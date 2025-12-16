
export default function Delivery() {
  return (
    <section className="pt-16 pb-60 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          
          <div className="flex-1 min-w-70 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 text-center">
            <div className="text-8xl text-orange-500 mb-4">
              <i class="fi fi-bs-hamburger"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Pick Meals
            </h3>
            <p className="text-gray-600 text-md leading-relaxed">
              Choose from dozens of delicious, chef-curated meals every week. Filter by dietary preference or cuisine type to find exactly what you crave.
            </p>
          </div>

          <div className="flex-1 min-w-70 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 text-center">
            <div className="text-8xl text-orange-500 mb-4">
              <i class="fi fi-bs-cursor-finger"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Choose How Often
            </h3>
            <p className="text-gray-600 text-md leading-relaxed">
              Adjust, pause, or cancel your subscription anytime. Easily choose your weekly frequency and skip any delivery dates that don't fit your plans.
            </p>
          </div>

          <div className="flex-1 min-w-70 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 text-center">
            <div className="text-8xl text-orange-500 mb-4">
              <i class="fi fi-bs-shipping-fast "></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Fast Deliveries
            </h3>
            <p className="text-gray-600 text-md leading-relaxed">
              Our lightning-fast delivery network ensures your fresh meals arrive at your door precisely when promised, perfectly chilled and ready to enjoy.
            </p>
          </div>
          
        </div>
      </div>
    </section>
            
  );       
}