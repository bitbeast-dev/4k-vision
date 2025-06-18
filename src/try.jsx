"use client";

import { Button, image } from "@heroui/react";
import { rgba } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    {
      image: "/partner (1).PNG",
      title: "Creative Solutions",
      subtitle: "Bringing ideas to life",
    },
    {
      image: "/partner (2).PNG",
      title: "Digital Innovation",
      subtitle: "Technology meets design",
    },
    {
      image: "/partner (3).PNG",
      title: "Strategic Growth",
      subtitle: "Building tomorrow today",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      title: "CCTV Systems (4K)",
      description:
        "Advanced surveillance solutions with crystal clear 4K resolution",
      icon: "icon (2).png",
    },
    {
      title: "Fingerprint Access Control",
      description: "Secure biometric access systems for enhanced security",
      icon: "cyan (6).png",
    },
    {
      title: "Network Infrastructure",
      description: "Robust networking solutions for seamless connectivity",
      icon: "cyan (3).png",
    },
    {
      title: "Gate Automation",
      description: "Smart automated gate systems with remote control",
      icon: "cyan (1).png",
    },
    {
      title: "Real Estate Security",
      description: "Comprehensive security solutions for properties",
      icon: "cyan (1).png",
    },
    {
      title: "Mobile/Web Development",
      description: "Custom applications tailored to your needs",
      icon: "cyan (4).png",
    },
    {
      title: "GPS Installations",
      description: "Professional GPS tracking and navigation systems",
      icon: "cyan (2).png",
    },
    {
      title: "Rapid Response Solutions",
      description: "24/7 emergency security response services",
      icon: "cyan (5).png",
    },
  ];

  const values = [
    {
      title: "Customer Focus",
      description:
        "Putting our clients' needs at the center of everything we do",
      // icon: "🎯",
    },
    {
      title: "Quality",
      description: "Delivering excellence in every project and service",
      // icon: "⭐",
    },
    {
      title: "Efficiency",
      description: "Streamlined processes for optimal results",
      // icon: "⚡",
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and ethical business practices",
      // icon: "🛡️",
    },
  ];

  const team = [
    {
      name: "ENGR. FABIEN MBONIGABA",
      role: "CEO & Founder",
      image: "test.jfif",
    },
    { name: "LAILA MUGANGA", role: "Sales Manager", image: "test.jfif" },
    {
      name: "EMMANUEL HAVUGIMANA",
      role: "Marketing Manager",
      image: "test.jfif",
    },
    { name: "Lisa Brown", role: "Project Manager", image: "test.jfif" },
  ];

  const testimonials = [
    {
      quote:
        "4K Vision transformed our security infrastructure completely. Outstanding service!",
      client: "David Wilson",
      role: "Property Manager",
    },
    {
      quote:
        "Professional, reliable, and innovative solutions. Highly recommended!",
      client: "Maria Garcia",
      role: "Business Owner",
    },
    {
      quote:
        "Their rapid response team is exceptional. We feel completely secure.",
      client: "Robert Taylor",
      role: "Facility Director",
    },
  ];

  const partners = [
    {
      image: "partner (2).PNG",
    },
    {
      image: "partner (3).PNG",
    },
    {
      image: "partner (4).PNG",
    },

    {
      image: "partner (5).PNG",
    },

    {
      image: "logo6.PNG",
    },

    {
      image: "nyungwe.PNG",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300  `}>
      {/* Enhanced Technology World Map Background */}

      {/* Navigation */}
      <nav className="bg-[#54b5cb] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-sky-500 ">
              <img src="./logo.png" alt="" className="w-30" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "Mission",
                "Values",
                "Services",
                "Team",
                "Partners",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group"
                >
                  <span className="transition-colors duration-200">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-transform ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-current transition-opacity ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-transform ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t border-gray-200 dark:border-gray-700`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "Home",
                "Mission",
                "Values",
                "Services",
                "Team",
                "Partners",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 hover:text-sky-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#16285b]">
          <img src="Group 1.svg" alt="" className="mt-30  opacity-50" />
        </div>
        <div></div>

        {/* <div className="bg-white/10 absolute top-0 h-screen w-full" style={{backdropFilter: "blur(1px)"}}></div> */}
        <div
          className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-start ">
            <div className="mt-[50px] w-200">
              <h1 className="text-6xl md:text-8xl text-left mb-6 text-white bg-clip-text font-semibold">
                4K VISION
              </h1>
              <p className="text-xl md:text-2xl text-left mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 font-light">
                4KVISION is a leading IT company offering security services,
                along with a wide array of specialized IT equipment, and real
                estate services to public and private organizations. Renowned
                for its innovative solutions, 4KVISION ensures the protection of
                digital assets and networks while also providing tailored real
                estate solutions to meet diverse needs.
              </p>

              <button className="p-4 text-white  bg-[#54b5cb] rounded-lg font-bold mr-150 border border-white">
                Explore Our Work
              </button>
            </div>
            <div>
              <img src="svg (13).svg" alt="" className="w-100 mb-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4">
        <div className=" p-5 flex items-center justify-between ">
          <div>
            <img src="svg (13).svg" alt="" className="w-300" />
          </div>
          <div className="ml-10">
            <h2 className="text-4xl font-bold mb-6 text-[#54b5cb]">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              To provide cutting-edge security solutions and innovative
              technology services that protect and empower businesses and
              individuals. We are committed to delivering excellence through
              advanced 4K surveillance systems, comprehensive IT infrastructure,
              and reliable real estate security solutions.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              4KVISION Security Solutions is revolutionizing the security
              industry by offering a unique combination of high-quality security
              products, exceptional supply chain efficiency, and guaranteed
              on-time delivery. We are dedicated to creating safe and secure
              environments for our clients, their property, and their residents.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
            Core Values
          </h2>
          <div className="flex h-130 p-10">
            <div className="w-200">
              <img src="process.png" alt="" className="w-200" />
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-10 ">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-1 border-[#ddd]  transition-all duration-300 hover:scale-105 shadow-[#ddd] shadow-lg hover:shadow-lg `}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#54b5cb]">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative">
        <div className="absolute inset-0 opacity-4">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 Q600,50 1200,200 L1200,600 Q600,750 0,600 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-1 border-[#ddd] bg-white transition-all duration-300 hover:scale-105 shadow-[#ddd] shadow-lg hover:shadow-xl group`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <img src={service.icon} alt="" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#54b5cb]">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <button className="text-[#54b5cb] hover:text-sky-600 font-medium transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
            Our Uniqueness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-308 h-130  flex ">
              <div className="w-1/2 p-5">
                <p className="mt-5 font-light">
                  <span className="text-[#54b5cb] font-bold">
                    One-Stop Shop:
                  </span>{" "}
                  We handle everything from supplying the most One-Stop Shop: We
                  handle everything from supplying the most advanced security
                  equipment to expert installation and configuration. This
                  streamlined approach saves you time and eliminates the hassle
                  of coordinating with multiple vendors.
                  <p />
                  <p className="mt-5 font-light">
                    <span className="text-[#54b5cb] font-bold">
                      Guaranteed On-Time Delivery:
                    </span>{" "}
                    We understand that security projects often have tight
                    deadlines. That's why we offer a guaranteed on-time delivery
                    promise, ensuring minimal disruption to your property or
                    business operations. There are no hidden delays or
                    unexpected wait times.
                  </p>
                  <p className="mt-5 font-light">
                    <span className="text-[#54b5cb] font-bold">
                      Unmatched Supply Chain:
                    </span>{" "}
                    Our efficient supply chain gives us immediate access to the
                    latest security equipment. This translates to faster project
                    completion and the peace of mind of knowing your security
                    system is built with cutting-edge technology.
                  </p>
                </p>
              </div>
              <div>
                <img
                  src="svg (11).svg"
                  alt=""
                  className="w-200 h-130 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl  transition-all duration-300 hover:scale-105  shadow-[#ddd] shadow-lg hover:shadow-lg group `}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <img
                    src={member.image}
                    alt=""
                    srcset=""
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl  mb-2">{member.name}</h3>
                <p className="text-sky-500 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  <button className="p-2 rounded-ful hover:text-white transition-colors">
                    <img src="icon (7).png" alt="" />
                  </button>
                  <button className="p-2 rounded-ful hover:text-white transition-colors">
                    <img src="icon (7).png" alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
            Our Partners
          </h2>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-8 py-4 rounded-lg shadow-[#ddd] shadow-lg border border-blue-300 transition-all duration-300 hover:border-sky-500 `}
                >
                  <span className="text-lg font-semibold whitespace-nowrap">
                    <img
                      src={partner.image}
                      alt=""
                      className="object-cover object-center"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-sky-600/10"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#54b5cb]">
            What Our Clients Say
          </h2>
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-4"
                }`}
              >
                <blockquote className="text-2xl italic mb-6 text-gray-600 dark:text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-lg">
                  <span className="font-semibold text-sky-500">
                    {testimonial.client}
                  </span>
                  <span className="text-gray-500"> - {testimonial.role}</span>
                </cite>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? ""
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-sky-500">
            Get in Touch
          </h2>
          <div className={`p-8 rounded-2xl border backdrop-blur-sm `}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all`}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all`}
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="6"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all `}
              ></textarea>
              <button
                type="submit"
                className="w-full py-3  text-white rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-4 border-t 
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-sky-500 mb-4">
                4K VISION
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Leading IT company specializing in security solutions and
                technology services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>CCTV Systems</li>
                <li>Access Control</li>
                <li>Network Solutions</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full  text-white  transition-colors">
                  📧
                </button>
                <button className="p-2 rounded-full  text-white  transition-colors">
                  💼
                </button>
                <button className="p-2 rounded-full  text-white  transition-colors">
                  🐦
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2024 4K Vision. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <button className="fixed bottom-6 right-6 p-4  text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-50">
        💬
      </button>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
