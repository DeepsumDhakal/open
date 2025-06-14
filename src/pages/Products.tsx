
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const flourProducts = [
    {
      id: 1,
      name: "All-Purpose Flour",
      description: "A versatile flour perfect for a wide range of recipes, from cookies and cakes to bread and pasta.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      details: "Protein Content: 10-12%, Bleached: No, Enriched: Yes, Available in: 2lb, 5lb, 25lb bags"
    },
    {
      id: 2,
      name: "Whole Wheat Flour",
      description: "Made from the entire wheat kernel, this nutritious flour is perfect for hearty breads and baked goods.",
      image: "https://images.unsplash.com/photo-1612192666277-c323708c9431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      details: "Protein Content: 13-14%, Bleached: No, Enriched: No, Available in: 2lb, 5lb bags"
    },
    {
      id: 3,
      name: "Pastry Flour",
      description: "A fine-textured flour with low protein content, ideal for tender and flaky pastries, pies and cookies.",
      image: "https://images.unsplash.com/photo-1560847468-5eef50c4c414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      details: "Protein Content: 8-9%, Bleached: No, Enriched: Yes, Available in: 2lb, 5lb bags"
    },
    {
      id: 4,
      name: "Bread Flour",
      description: "High-protein flour perfect for yeast breads, providing excellent structure and a chewy texture.",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      details: "Protein Content: 12-14%, Bleached: No, Enriched: Yes, Available in: 2lb, 5lb, 25lb bags"
    }
  ];

  const specialtyProducts = [
    {
      id: 5,
      name: "Gluten-Free Flour Blend",
      description: "A carefully crafted blend for those with gluten sensitivity, suitable for all your baking needs.",
      image: "https://images.unsplash.com/photo-1622467827417-bbe6d374cdf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      details: "Ingredients: Rice flour, potato starch, tapioca flour, xanthan gum. Available in: 2lb bags"
    },
    {
      id: 6,
      name: "Organic Rye Flour",
      description: "Dark, flavorful flour perfect for traditional rye breads and European-style baking.",
      image: "https://images.unsplash.com/photo-1631125915902-d8eda6410達853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      details: "Protein Content: 9-10%, Organic: Yes, Available in: 2lb, 5lb bags"
    },
    {
      id: 7,
      name: "Semolina Flour",
      description: "Coarse-ground durum wheat flour, ideal for pasta making and certain breads and desserts.",
      image: "https://images.unsplash.com/photo-1590301157890-68fd4ca81c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
      details: "Protein Content: 13%, Texture: Coarse, Available in: 2lb, 5lb bags"
    }
  ];

  const grainProducts = [
    {
      id: 8,
      name: "Steel Cut Oats",
      description: "Whole oat groats that have been cut into two or three pieces, creating a chewy, nutty breakfast cereal.",
      image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      details: "Processing: Minimal, Cooking Time: 20-30 minutes, Available in: 1lb, 2lb bags"
    },
    {
      id: 9,
      name: "Bulgur Wheat",
      description: "Parboiled, dried and ground wheat berries, quick-cooking and perfect for salads and side dishes.",
      image: "https://images.unsplash.com/photo-1556060880-7662c76257e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      details: "Processing: Parboiled, Cooking Time: 10-12 minutes, Available in: 1lb bags"
    }
  ];

  const ProductCard = ({ product }: { product: any }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-mill-darkBrown">{product.name}</h3>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="text-sm text-gray-600 mb-4">
          <p>{product.details}</p>
        </div>
        <Button asChild className="bg-mill-gold hover:bg-mill-brown text-white w-full">
          <Link to="/contact">Inquire About This Product</Link>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Page Header */}
      <div className="bg-mill-brown py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our range of premium quality flour and grain products.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title text-center mx-auto">
            Premium Quality Flour & Grains
          </h2>
          
          <Tabs defaultValue="flour" className="w-full mb-16">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="flour" className="text-lg px-6">Flour Products</TabsTrigger>
                <TabsTrigger value="specialty" className="text-lg px-6">Specialty Flour</TabsTrigger>
                <TabsTrigger value="grains" className="text-lg px-6">Whole Grains</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="flour">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {flourProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specialty">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specialtyProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="grains">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {grainProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 bg-mill-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title text-center mx-auto">
            Our Quality Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-mill-gold rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-mill-darkBrown">Grain Selection</h3>
              <p className="text-gray-700">We carefully select the finest grains from local farmers.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-mill-gold rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-mill-darkBrown">Cleaning</h3>
              <p className="text-gray-700">Grains are thoroughly cleaned to remove impurities.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-mill-gold rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-mill-darkBrown">Milling</h3>
              <p className="text-gray-700">Our traditional milling process preserves nutrition and flavor.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-mill-gold rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-mill-darkBrown">Quality Control</h3>
              <p className="text-gray-700">Every batch is tested to ensure consistent quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Orders or Bulk Pricing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            We offer custom milling services and competitive pricing for bulk orders.
          </p>
          <Button asChild className="bg-mill-gold hover:bg-mill-brown text-white px-8 py-6 text-lg">
            <Link to="/contact">Contact Our Sales Team</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Products;
