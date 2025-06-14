
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Page Header */}
      <div className="bg-mill-brown py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn more about Dhaneshwor Flour Mills, our history, values, and commitment to quality in Nepal.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-title">Legacy</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1978, Our story began with the establishment of Shram Dhaneshwor (श्रम धनेश्वर) — a local rice mill founded by Uttam Sharma Dhakal and his wife in the small hometown of Hetauda. Built on the values of dedication, integrity, and service to the community, this modest operation started within the heart of a close-knit town.
              </p>
              <p className="text-gray-700 mb-4">
                Through the tireless efforts of Uttam and his wife, along with decades of continuous improvement, innovation, and a relentless focus on quality, we transitioned from rice milling to becoming one of Nepal’s most trusted flour producers. Today, our flour is recognized nationwide for its consistency, purity, and taste — earning the trust of countless families and businesses across the country.
              </p>
              <p className="text-gray-700">
                Rooted in a proud past and driven by a commitment to excellence, our legacy lives on — delivering quality you can trust, every single day.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Nepalese countryside"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-mill-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 section-title">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-10">
            At Dhaneshwor, our vision is to be more than just a flour producer — we aim to be a part of every household’s daily nourishment and tradition. We aspire to become Nepal’s most trusted and loved brand in flour and food essentials, recognized not only for our unwavering quality but also for the care and integrity that go into every grain we process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-mill-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-mill-darkBrown">Quality First</h3>
              <p className="text-gray-700">
                We never compromise on quality, carefully selecting the finest grains from Nepal's terraced farms to produce exceptional flour.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-mill-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-mill-darkBrown">Support Local</h3>
              <p className="text-gray-700">
                We partner with local Nepali farmers across the country, from Terai to the mountain regions, supporting rural livelihoods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-mill-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-mill-darkBrown">Sustainability</h3>
              <p className="text-gray-700">
                We honor Nepal's natural beauty by implementing environmentally-friendly practices throughout our production process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title text-center mx-auto">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-full mx-auto w-40 h-40 bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Rajesh Shrestha"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-mill-darkBrown">Rajesh Shrestha</h3>
              <p className="text-mill-gold mb-2">CEO & Chairman</p>
              <p className="text-gray-600">
                Grandson of the founder, Rajesh has led the company's expansion across Nepal for the past 15 years.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-full mx-auto w-40 h-40 bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Sarita Maharjan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-mill-darkBrown">Sarita Maharjan</h3>
              <p className="text-mill-gold mb-2">Operations Director</p>
              <p className="text-gray-600">
                With 20+ years in Nepal's milling industry, Sarita oversees all production processes with precision.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-full mx-auto w-40 h-40 bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Anil Tamang"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-mill-darkBrown">Anil Tamang</h3>
              <p className="text-mill-gold mb-2">Quality Control Manager</p>
              <p className="text-gray-600">
                Anil ensures all products meet our rigorous Nepali and international quality standards before shipment.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-full mx-auto w-40 h-40 bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1522&q=80"
                  alt="Puja Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-mill-darkBrown">Puja Sharma</h3>
              <p className="text-mill-gold mb-2">Marketing Director</p>
              <p className="text-gray-600">
                Puja develops our brand strategy and oversees all marketing initiatives across Nepal's diverse market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mill-lightBrown text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Learn more about our authentic Nepali products or explore career opportunities with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-mill-darkBrown hover:bg-mill-cream hover:text-mill-gold px-8 py-6 text-lg">
              <Link to="/products">Explore Our Products</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-mill-darkBrown px-8 py-6 text-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
