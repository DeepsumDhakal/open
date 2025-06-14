
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section h-[70vh] flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Quality Flour for Every Purpose</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            From our mills to your kitchen, we provide premium quality flour for all your baking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-mill-gold hover:bg-mill-brown text-white px-8 py-6 text-lg">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-mill-brown px-8 py-6 text-lg">
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-mill-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 section-title mx-auto">
            Our Premium Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                alt="All-Purpose Flour"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-mill-darkBrown">All-Purpose Flour</h3>
                <p className="text-gray-700 mb-4">Perfect for everyday baking needs from cookies to bread.</p>
                <Button asChild className="bg-mill-gold hover:bg-mill-brown text-white w-full">
                  <Link to="/products">Learn More</Link>
                </Button>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1612192666277-c323708c9431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Whole Wheat Flour"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-mill-darkBrown">Whole Wheat Flour</h3>
                <p className="text-gray-700 mb-4">Nutrient-rich flour with the goodness of whole grains.</p>
                <Button asChild className="bg-mill-gold hover:bg-mill-brown text-white w-full">
                  <Link to="/products">Learn More</Link>
                </Button>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560847468-5eef50c4c414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
                alt="Pastry Flour"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-mill-darkBrown">Pastry Flour</h3>
                <p className="text-gray-700 mb-4">Fine-textured flour ideal for light and flaky pastries.</p>
                <Button asChild className="bg-mill-gold hover:bg-mill-brown text-white w-full">
                  <Link to="/products">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 section-title mx-auto">
            Why Choose Golden Grain Mills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:border-mill-gold hover:shadow-md">
              <div className="w-16 h-16 bg-mill-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mill-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-mill-darkBrown">Premium Quality</h3>
              <p className="text-gray-600">Our flours are made from carefully selected grains to ensure the highest quality.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:border-mill-gold hover:shadow-md">
              <div className="w-16 h-16 bg-mill-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mill-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-mill-darkBrown">Traditional Milling</h3>
              <p className="text-gray-600">We maintain traditional milling techniques to preserve flavor and nutrition.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:border-mill-gold hover:shadow-md">
              <div className="w-16 h-16 bg-mill-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mill-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-mill-darkBrown">Locally Sourced</h3>
              <p className="text-gray-600">We source our grains from local farmers to support our community.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:border-mill-gold hover:shadow-md">
              <div className="w-16 h-16 bg-mill-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mill-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-mill-darkBrown">Efficient Processing</h3>
              <p className="text-gray-600">Modern techniques ensure consistent quality and efficient delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mill-lightBrown text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Quality?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our range of premium flour products for all your baking needs.
          </p>
          <Button asChild className="bg-white text-mill-darkBrown hover:bg-mill-cream hover:text-mill-gold px-8 py-6 text-lg">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
