import Image from "next/image";
import {
  Plane,
  Building2,
  Map,
  ShieldCheck,
  HeadphonesIcon,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Incel Tourism Logo"
                  width={300}
                  height={100}
                  className="h-14 md:h-20 w-auto object-contain transform origin-left hover:scale-105 transition-transform"
                  priority
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#"
                className="text-gray-700 hover:text-primary transition font-medium"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-primary transition font-medium"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-primary transition font-medium"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-primary transition font-medium"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="btn-accent hidden md:inline-flex items-center justify-center"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
          <Image
            src="/hero.jpg"
            alt="Beautiful travel destination with hot air balloons"
            fill
            className="object-cover absolute inset-0 z-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d47a1]/40 via-[#0d47a1]/10 to-transparent z-10"></div>

          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              Different mindset <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary from-70% to-accent drop-shadow-sm">A different version</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md font-light">
              We don't just plan trips; we craft unforgettable experiences.
              Discover the world with expert guidance and premium service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-accent text-lg px-8 py-4 flex items-center justify-center gap-2 group"
              >
                <Plane className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Plan Your Trip
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/20 transition-all text-lg flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* Trust/Accreditation Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Thousands,{" "}
              <span className="text-primary">Backed by the Best</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We are fully licensed travel agents, accredited by the industry's
              most recognized bodies.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl shadow-sm">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="font-bold text-gray-900">IATA Accredited</p>
                  <p className="text-xs text-gray-500">
                    International Air Transport Association
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-green-500 ml-4" />
              </div>
              <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 px-6 py-4 rounded-xl shadow-sm">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="font-bold text-gray-900">NANTA Member</p>
                  <p className="text-xs text-gray-500">
                    National Assoc. of Nigerian Travel Agencies
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-green-500 ml-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Travel With <span className="text-primary">Incel?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From flights to customized tours, we handle every detail so you
                can focus on making memories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Map className="w-8 h-8" />,
                  title: "UAE-licensed DMC",
                  desc: "Fully licensed and regulated destination management company.",
                },
                {
                  icon: <Plane className="w-8 h-8" />,
                  title: "Curated Itineraries",
                  desc: "Expertly designed travel experiences tailored exclusively to you.",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8" />,
                  title: "Secure Payments",
                  desc: "Safe and encrypted processing for your complete peace of mind.",
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Visa Support",
                  desc: "Expert assistance navigating requirements for a smooth journey.",
                },
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: "Luxury Hotels",
                  desc: "Access to premium accommodations at competitive rates worldwide.",
                },
                {
                  icon: <HeadphonesIcon className="w-8 h-8" />,
                  title: "24/7 Assistance",
                  desc: "Round-the-clock support before, during, and after your trip.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/lifestyle.jpg"
                  alt="Couple walking at a luxury resort"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d47a1]/90 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-3xl font-bold mb-2">10,000+</p>
                    <p className="text-white/80 font-medium uppercase tracking-wider text-sm">
                      Happy Travelers
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Your Gateway to{" "}
                  <span className="text-primary">Extraordinary</span> Journeys
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Incel Tourism LLC is a leading Destination Management Company
                  with a strong presence in Lagos, Nigeria, serving the dynamic
                  Sub-Saharan African market.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As a licensed Inbound Tour Operator in the UAE, we specialize
                  in offering comprehensive travel solutions for leisure
                  visitors, corporate clients, and business travelers
                  respectively. Our new full-service booking portal is currently
                  under development to serve you even better.
                </p>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">12+</p>
                    <p className="text-gray-500 text-sm font-medium uppercase">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-1">200+</p>
                    <p className="text-gray-500 text-sm font-medium uppercase">
                      Destinations
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Connect with an Expert <Plane className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section
          id="contact"
          className="py-24 bg-primary relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary-dark rounded-full opacity-50 blur-3xl"></div>

          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need help with bookings?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Our automated booking portal is coming soon. In the meantime, our
              travel experts are ready to curate your perfect itinerary
              manually.
            </p>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-left max-w-3xl mx-auto border-t-8 border-primary-dark">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Quote
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-700">
                      <option>Flight Booking</option>
                      <option>Hotel Accommodation</option>
                      <option>Tour Package</option>
                      <option>Visa Assistance</option>
                      <option>Airport Transfer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dubai, Singapore"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Dates
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Oct 15 - Oct 22"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your trip..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn-accent w-full text-lg py-4 flex items-center justify-center gap-2"
                >
                  <Plane className="w-5 h-5" /> Send Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.png"
                  alt="Incel Tourism Logo"
                  width={300}
                  height={100}
                  className="h-14 md:h-20 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Incel Tourism LLC is a leading Destination Management Company
                offering comprehensive travel solutions for leisure visitors,
                corporate clients, and business travelers.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
                Quick Links
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Flights
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Visa
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
                Dubai Office
              </h4>
              <address className="not-italic text-gray-400 space-y-3 text-sm">
                <p>
                  Suite 403, Dubai National Insurance Building, Port Saeed,
                  Dubai, UAE
                </p>
                <p className="flex items-center gap-2 mt-3 text-white">
                  <HeadphonesIcon className="w-4 h-4 text-primary" /> +971 4 397
                  7242
                </p>
                <p className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />{" "}
                  info@inceltourism.com
                </p>
              </address>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
                Lagos Office
              </h4>
              <address className="not-italic text-gray-400 space-y-3 text-sm">
                <p>
                  4th Floor, Right Wing, Mulliner Towers, Plot 39 Alfred Rewane
                  Road, Ikoyi, Lagos, Nigeria
                </p>
                <p className="flex items-center gap-2 mt-3 text-white">
                  <HeadphonesIcon className="w-4 h-4 text-primary" /> +234 818
                  085 0745
                </p>
                <p className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />{" "}
                  info@inceltourism.com
                </p>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Incel Tourism. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white transition">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348180850745"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/30 transition-all z-50 group flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
