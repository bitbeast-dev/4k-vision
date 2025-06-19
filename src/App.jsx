"use client";

import { Button, image } from "@heroui/react";
import { rgba } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    {
      image: "/img (1).jfif",
      title: "Creative Solutions",
      subtitle: "Bringing ideas to life",
    },
    {
      image: "/img (2).jfif",
      title: "Digital Innovation",
      subtitle: "Technology meets design",
    },
    {
      image: "/img (3).jfif",
      title: "Strategic Growth",
      subtitle: "Building tomorrow today",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    },
    {
      title: "Quality",
      description: "Delivering excellence in every project and service",
    },
    {
      title: "Efficiency",
      description: "Streamlined processes for optimal results",
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and ethical business practices",
    },
  ];

  const team = [
    {
      name: "ENGR. FABIEN MBONIGABA",
      role: "CEO & Founder",
      image: "won (2).png",
    },
    { name: "LAILA MUGANGA", role: "Sales Manager", image: "won (1).png" },
    {
      name: "EMMANUEL HAVUGIMANA",
      role: "Marketing Manager",
      image: "won (3).png",
    },
    { name: "?", role: "Project Manager", image: "test.jfif" },
  ];

  const testimonials = [
    {
      quote:
        "4K Vision transformed our security infrastructure completely. Outstanding service!",
      client: "Tuyizere Olivie",
      role: "Property Manager",
      image: "me (2).jfif",
    },
    {
      quote:
        "Professional, reliable, and innovative solutions. Highly recommended!",
      client: "Nsengumukiza Irene",
      role: "Business Owner",
      image: "me (2).jfif",
    },
    {
      quote:
        "Their rapid response team is exceptional. We feel completely secure.",
      client: "Robert Kwizera",
      role: "Facility Director",
      image: "me (1).jfif",
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
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-[#54b5cb] text-white  sticky top-0 z-50 h-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-sky-500">
              <img
                src="./logo.png"
                alt="4K Vision Logo"
                className="w-32 h-auto"
              />
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
                  className="relative group px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none  focus:ring-offset-2 focus:ring-sky-400"
                >
                  <span className="transition-colors duration-200">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-transform origin-center ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-current transition-opacity ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-transform origin-center ${
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
          <div className="md:hidden border-t border-gray-200 bg-[#54b5cb]">
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
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-sky-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
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
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 md:px-20"
      >
        <div className="absolute inset-0 bg-[#16285b] -z-10">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f6a7848-360a-455e-85b5-15ae627de0d0.png"
            alt="Technology world map background with blue overlay"
            className="object-cover w-full h-full opacity-40"
          />
        </div>

        <div
          className={`relative z-10 text-center md:text-left max-w-3xl transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            4K VISION
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-8 leading-relaxed">
            4KVISION is a leading IT company offering security services, along
            with a wide array of specialized IT equipment, and real estate
            services to public and private organizations. Renowned for its
            innovative solutions, 4KVISION ensures the protection of digital
            assets and networks while also providing tailored real estate
            solutions to meet diverse needs.
          </p>
          <button className="px-8 py-4 rounded-lg bg-[#54b5cb] font-semibold text-white hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-400 focus:ring-opacity-50 transition">
            Explore Our Work
          </button>
        </div>
        <div className="mt-10 md:mt-0 md:ml-12 flex-shrink-0 w-full max-w-md">
          <img
            src="svg (13).svg"
            alt="Illustration representing 4K Vision technology"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="py-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div className="w-full md:w-1/2">
          <img
            src="svg (13).svg"
            alt="Mission illustration representing 4K Vision's purpose"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-300">
          <h2 className="text-4xl font-bold text-[#54b5cb] mb-6">
            Our Mission
          </h2>
          <p className="mb-4 leading-relaxed">
            To provide cutting-edge security solutions and innovative technology
            services that protect and empower businesses and individuals. We are
            committed to delivering excellence through advanced 4K surveillance
            systems, comprehensive IT infrastructure, and reliable real estate
            security solutions.
          </p>
          <p className="leading-relaxed">
            4KVISION Security Solutions is revolutionizing the security industry
            by offering a unique combination of high-quality security products,
            exceptional supply chain efficiency, and guaranteed on-time
            delivery. We are dedicated to creating safe and secure environments
            for our clients, their property, and their residents.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
            Core Values
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="process.png"
                alt="Image representing company core values"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-[#ddd] hover:scale-105 transition transform shadow-md hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#54b5cb] mb-3">
                    {value.title}
                  </h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 md:px-20 max-w-7xl mx-auto relative"
      >
        <div className="absolute inset-0 opacity-5 -z-10">
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

        <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-300 bg-white shadow-md hover:shadow-lg transition transform hover:scale-105"
              role="region"
              aria-label={service.title}
            >
              <div className="mb-4">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-16 h-16 object-contain mx-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#54b5cb] text-center">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 text-center">
                {service.description}
              </p>
              <button className="block mx-auto text-[#54b5cb] hover:text-sky-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md px-4 py-2">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Our Uniqueness Section */}
      <section
        id="uniqueness"
        className="py-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div className="w-full md:w-1/2 space-y-6 text-gray-300">
          <h2 className="text-4xl font-bold mb-6 text-[#54b5cb]">
            Our Uniqueness
          </h2>
          <p>
            <span className="font-bold text-[#54b5cb]">One-Stop Shop:</span> We
            handle everything from supplying the most advanced security
            equipment to expert installation and configuration. This streamlined
            approach saves you time and eliminates the hassle of coordinating
            with multiple vendors.
          </p>
          <p>
            <span className="font-bold text-[#54b5cb]">
              Guaranteed On-Time Delivery:
            </span>{" "}
            We understand that security projects often have tight deadlines.
            That's why we offer a guaranteed on-time delivery promise, ensuring
            minimal disruption to your property or business operations. There
            are no hidden delays or unexpected wait times.
          </p>
          <p>
            <span className="font-bold text-[#54b5cb]">
              Unmatched Supply Chain:
            </span>{" "}
            Our efficient supply chain gives us immediate access to the latest
            security equipment. This translates to faster project completion and
            the peace of mind of knowing your security system is built with
            cutting-edge technology.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="svg (15).svg"
            alt="Illustration representing company uniqueness"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Our Events Section */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
          Our Events
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 text-gray-300 space-y-6">
            <p className="leading-relaxed">
              We prioritize understanding your unique security needs and
              exceeding your expectations through speed, reliability, and clear
              communication.
            </p>
            <p className="leading-relaxed">
              One-Stop Shop: We handle everything from supplying the most
              advanced security equipment to expert installation and
              configuration. This streamlined approach saves you time and
              eliminates the hassle of coordinating with multiple vendors.
            </p>
            <p className="leading-relaxed">
              Guaranteed On-Time Delivery: We understand that security projects
              often have tight deadlines. That's why we offer a guaranteed
              on-time delivery promise, ensuring minimal disruption to your
              property or business operations. There are no hidden delays or
              unexpected wait times.
            </p>
            <p className="leading-relaxed">
              <span className="font-bold">Quality:</span> We supply and deliver
              only the highest-grade security products and other equipment,
              ensuring long-term system performance and peace of mind.
            </p>
          </div>

          <div
            className="relative w-full h-100 md:w-1/2 rounded-lg overflow-hidden flex items-center justify-center"
            aria-label="Slideshow of company event highlights"
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-lg transition-opacity duration-1000"
              style={{
                backgroundImage: `url('${slides[currentSlide].image}')`,
              }}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">
                {slides[currentSlide].title}
              </h3>
              <p className="text-lg md:text-xl font-light opacity-90">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    index === currentSlide ? "bg-blue-600 w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 group"
              role="article"
              aria-label={`${member.name}, ${member.role}`}
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sky-500 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  aria-label={`Contact ${member.name} via email`}
                  className="p-2 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <img
                    src="icon (7).png"
                    alt="Email icon"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  aria-label={`Contact ${member.name} via LinkedIn`}
                  className="p-2 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <img
                    src="icon (7).png"
                    alt="LinkedIn icon"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
          Our Partners
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 rounded-lg shadow-md border border-gray-300 hover:border-sky-500 transition-all duration-300"
              >
                <img
                  src={partner.image}
                  alt={`Partner logo #${index + 1}`}
                  className="object-contain w-36 h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20 px-6 md:px-20 relative"
        aria-label="Client testimonials"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#54b5cb]">
            What Our Clients Say
          </h2>
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentTestimonial
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${index + 1} of ${
                  testimonials.length
                }`}
              >
                <blockquote className="text-2xl italic mb-6 text-gray-700 dark:text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-lg font-semibold text-sky-600">
                  {testimonial.client} -{" "}
                  <span className="font-normal">{testimonial.role}</span>
                </cite>
             <img
                  src={testimonial.image}
                  className="w-30 h-30 rounded-full object-center p-2 mx-auto"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`Show testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  index === currentTestimonial ? "bg-sky-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-20 relative max-w-4xl mx-auto"
        aria-label="Contact us"
      >
        <div className="absolute inset-0 opacity-5 -z-10"></div>
        <h2 className="text-4xl font-bold text-center mb-16 text-[#54b5cb]">
          Get in Touch
        </h2>
        <div className="flex">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#54b5cb] mt-1" />
              <p className="text-gray-600">Kigali Town</p>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#54b5cb] mt-1" />
              <p className="text-gray-600">+250 788 689 309</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-[#54b5cb] mt-1" />
              <p className="text-gray-600">+250 781 823 341</p>
            </div>

            <div className="flex items-start gap-4">
              <Linkedin className="text-[#54b5cb] mt-1" />
              <p className="text-gray-600">4K VISION</p>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[#54b5cb] mt-1" />
              <p className="text-gray-600">4kvisions22@gmail.com</p>
            </div>
          </div>
          <form
            className="p-8 rounded-2xl border border-white/20 backdrop-blur-sm flex flex-col space-y-6 hidden md:block"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
              />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows="6"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 text-white bg-[#54b5cb] rounded-lg font-semibold hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 text-gray-300 bg-[#16285b] p-10 rounded-tr-full md:rounded-tr-none">

        <div className="">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#54b5cb] mb-4 hidden md:block">
                4K VISION
              </h3>
              <p className="hidden md:block">
                Leading IT company specializing in security solutions and
                technology services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>CCTV Systems</li>
                <li>Access Control</li>
                <li>Network Solutions</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <button
        aria-label="Chat with support"
        className="fixed bottom-6 right-6 p-4 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-50 bg-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-400"
      >
        <span className="material-icons" aria-hidden="true">
          chat
        </span>
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </div>
  );
}
