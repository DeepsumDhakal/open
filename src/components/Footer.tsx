
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mill-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dhaneshwor Flour Mill</h3>
            <p className="mb-4">
              Providing premium quality flour products since 1978. From our farms in the Himalayan foothills to your table, we ensure the highest standards.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="social-icon text-white hover:text-mill-gold">
                <Facebook size={24} />
              </a>
              <a href="#" className="social-icon text-white hover:text-mill-gold">
                <Instagram size={24} />
              </a>
              <a href="#" className="social-icon text-white hover:text-mill-gold">
                <Twitter size={24} />
              </a>
              <a href="#" className="social-icon text-white hover:text-mill-gold">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-mill-gold transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-mill-gold transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="/products" className="hover:text-mill-gold transition-colors duration-200">Products</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-mill-gold transition-colors duration-200">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Araniko Highway, Bhaktapur</p>
              <p className="mb-2">Hetauda, Nepal</p>
              <p className="mb-2">Email: ddeepsumdhakal@gmail.com </p>
              <p>Phone: +977-57-521836</p>
            </address>
          </div>
        </div>

        <div className="border-t border-mill-lightBrown mt-8 pt-8 text-center">
          <p>&copy; 2025 Dhaneshwor Flour Mill. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
