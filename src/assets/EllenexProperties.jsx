import React, { useState } from "react";
import reactLogo from "./img/logo1.png";      // ✅ matches actual file
import logourl from "./img/ellamm.jpg";     // ✅ matches actual file
import { Facebook, Instagram, Youtube, Linkedin, Phone, MessageCircle, Mail } from "lucide-react";

export default function EllenexProperties() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const logoUrl = reactLogo;   // ✅ use the imported file
  const ownerUrl = logourl;    // ✅ use the imported file




  // Auto-slide between logo and owner photo
  React.useEffect(() => {
    if (logoUrl && ownerUrl) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
      }, 4000); // Change slide every 4 seconds
      return () => clearInterval(interval);
    }
  }, [logoUrl, ownerUrl]);

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/ellenexproperties', color: '#1877F2', name: 'facebook' },
    { icon: Instagram, url: 'https://instagram.com/ellenexproperties', color: '#E4405F', name: 'instagram' },
    { icon: Youtube, url: 'https://youtube.com/@ellenexproperties', color: '#FF0000', name: 'youtube' },
    { icon: Linkedin, url: 'https://linkedin.com/company/ellenexproperties', color: '#0A66C2', name: 'linkedin' },
  ];

  const contactLinks = [
    { 
      label: 'SALES WHATSAPP', 
      value: '+234 703 732 8339', 
      url: 'https://wa.me/+2347037328339',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600'
    },
    { 
      label: 'RENT WHATSAPP', 
      value: '+234 703 732 8339', 
      url: 'https://wa.me/+2347037328339',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600'
    },
    { 
      label: 'CALL US', 
      value: '+234 703 732 8339', 
      url: 'tel:+234 703 732 8339',
      icon: Phone,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'INSTAGRAM', 
      value: '@ELLENEXPROPERTIES', 
      url: 'https://instagram.com/ellenexproperties',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600'
    },
    { 
      label: 'FACEBOOK', 
      value: 'Ellenex Properties', 
      url: 'https://facebook.com/ellenexproperties',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700'
    },
    { 
      label: 'YOUTUBE', 
      value: 'Ellenex Properties', 
      url: 'https://youtube.com/@ellenexproperties',
      icon: Youtube,
      color: 'from-red-500 to-red-600'
    },
    { 
      label: 'LINKEDIN', 
      value: 'Ellenex Properties', 
      url: 'https://linkedin.com/company/ellenexproperties',
      icon: Linkedin,
      color: 'from-blue-700 to-blue-800'
    },
    { 
      label: 'EMAIL US', 
      value: 'info@ellenexproperties.com', 
      url: 'mailto:info@ellenexproperties.com',
      icon: Mail,
      color: 'from-gray-600 to-gray-700'
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header/Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2), transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.3), transparent 50%)'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center">
          {/* Logo/Avatar Slider */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56  rounded-full bg-linear-to-br from-white to-gray-100 p-1 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden shadow-inner relative">
                  {/* Default EP Text */}
                  {!logoUrl && !ownerUrl && (
                    <div className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg">
                      EP
                    </div>
                  )}
                  
                  {/* Logo Image */}
                  {logoUrl && (
                    <div 
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        currentSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <img 
                        src={logoUrl} 
                        alt="Ellenex Properties Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Owner Photo */}
                  {ownerUrl && (
                    <div 
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        currentSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <img 
                        src={ownerUrl} 
                        alt="Company Owner" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Slide Indicators */}
              {logoUrl && ownerUrl && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <button
                    onClick={() => setCurrentSlide(0)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === 0 ? 'bg-yellow-500 w-6' : 'bg-gray-400'
                    }`}
                    aria-label="Show logo"
                  />
                  <button
                    onClick={() => setCurrentSlide(1)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === 1 ? 'bg-yellow-500 w-6' : 'bg-gray-400'
                    }`}
                    aria-label="Show owner"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Website Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-gray-900 drop-shadow-sm">
            Ellenex-properties
          </h1>
          
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-gray-800 to-transparent mx-auto mb-6"></div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
            TOP-RATED REALTOR SERVING LEKKI, IKOYI, AND AJAH
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg mb-4 max-w-2xl mx-auto leading-relaxed text-gray-800">
           At Ellenex Properties, we help investors make smart real estate decisions and guide clients to
            their dream homes with confidence and speed. We take pride in delivering exceptional service,
             whether you’re selling a property or searching for a new one.
          </p>

          <p className="text-sm sm:text-base mb-4 max-w-2xl mx-auto leading-relaxed text-gray-700">
            Each client is paired with a dedicated agent who manages the entire process from start to finish,
             providing clear communication and weekly updates along the way.
          </p>

          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-gray-700">
           At Ellenex Properties, your goals are our priority and we’re here to make every step seamless
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
          Connect With Us
        </h2>
        
        <div className="flex justify-center gap-4 sm:gap-6 mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSocial(social.name)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
                style={{
                  backgroundColor: hoveredSocial === social.name ? social.color : 'white',
                }}
              >
                <Icon 
                  size={28} 
                  style={{
                    color: hoveredSocial === social.name ? 'white' : social.color,
                    transition: 'color 0.3s'
                  }}
                />
              </a>
            );
          })}
        </div>

        {/* Contact Links Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
          Get In Touch
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                className="block group"
              >
                <div className={`
                  relative overflow-hidden rounded-2xl bg-white shadow-md
                  transform transition-all duration-300
                  ${hoveredLink === index ? 'scale-105 shadow-2xl' : 'hover:shadow-lg'}
                `}>
                  <div className={`
                    absolute inset-0 bg-linear-to-r ${link.color} opacity-0 transition-opacity duration-300
                    ${hoveredLink === index ? 'opacity-100' : ''}
                  `}></div>
                  
                  <div className="relative px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        bg-linear-to-r ${link.color}
                        transform transition-transform duration-300
                        ${hoveredLink === index ? 'scale-110' : ''}
                      `}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className={`
                          text-xs font-semibold uppercase tracking-wider mb-1
                          transition-colors duration-300
                          ${hoveredLink === index ? 'text-white' : 'text-gray-500'}
                        `}>
                          {link.label}
                        </p>
                        <p className={`
                          text-base sm:text-lg font-bold
                          transition-colors duration-300
                          ${hoveredLink === index ? 'text-white' : 'text-gray-800'}
                        `}>
                          {link.value}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`
                      transform transition-all duration-300
                      ${hoveredLink === index ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}
                    `}>
                      <svg 
                        className="w-6 h-6 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-linear-to-r from-white via-yellow-100 to-amber-100 text-gray-900 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Ellenex Properties</p>
          <p className="text-sm text-gray-800">Your Trusted Real Estate Partner</p>
          <p className="text-xs text-gray-700 mt-4">© 2025 Ellenexproperties.com. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}