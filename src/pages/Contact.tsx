
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-mill-brown py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to our team in Nepal.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 section-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    required 
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      required 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number" 
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?" 
                    required 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..." 
                    required 
                    className="mt-1 min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="bg-mill-gold hover:bg-mill-brown text-white px-8 py-6 w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 section-title">Contact Information</h2>
              <div className="bg-mill-cream p-8 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold text-mill-darkBrown">Address</h3>
                    <p className="text-gray-700">Araniko Highway</p>
                    <p className="text-gray-700">Bhaktapur, Kathmandu Valley</p>
                    <p className="text-gray-700">Nepal</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold text-mill-darkBrown">Contact Details</h3>
                    <p className="text-gray-700">Phone: +977-1-4444555</p>
                    <p className="text-gray-700">Email: info@himalayanflour.com.np</p>
                    <p className="text-gray-700">Hours: Sun-Fri 9AM-5PM</p>
                  </div>
                </div>
              </div>
              
              {/* Map or Image */}
              <div className="rounded-lg overflow-hidden shadow-md h-64 bg-gray-200">
                {/* Replace with an image of Nepal */}
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Himalayan region of Nepal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-mill-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title text-center mx-auto">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-mill-darkBrown">Do you offer wholesale pricing?</h3>
              <p className="text-gray-700">
                Yes, we offer competitive wholesale pricing for businesses across Nepal. Please contact our sales team for more information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-mill-darkBrown">Can I visit your mill?</h3>
              <p className="text-gray-700">
                We offer guided tours of our facility on Fridays between 12-3PM. Prior appointment is required for safety reasons.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-mill-darkBrown">Do you ship throughout Nepal?</h3>
              <p className="text-gray-700">
                Yes, we deliver to all major cities and towns across Nepal. Remote locations may require additional time and shipping fees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-mill-darkBrown">What is your return policy?</h3>
              <p className="text-gray-700">
                We stand behind our products. If you're not satisfied with our flour quality, please contact us within 15 days of purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
