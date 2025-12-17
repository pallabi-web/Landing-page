import Image from 'next/image';

export default function Aboutus() {
  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 font-heading">
              Your Favorite Food Delivered Hot and Fresh
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
                We bring quality restaurant dishes right to your door, fast and contactless.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
               
                  className="px-8 py-3 text-lg font-bold text-white bg-orange-600 rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:bg-orange-700" 
                >
                  Order Now
                </button>
            
            </div>
          </div> <div className="relative flex justify-center mt-12 md:mt-0">
            
            <div className="w-full max-w-md h-96 relative"> 
                
                <Image
                  src="images/image.png"
                  alt="Food Image"
                  fill 
                  style={{ objectFit: "contain" }} 
                
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
