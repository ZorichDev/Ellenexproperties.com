import React, { useState } from "react";
import reactLogo from "./img/ellamm.jpg";      // ✅ matches actual file
import { AiFillTikTok } from "react-icons/ai";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { Facebook, Instagram, Youtube, Linkedin, Music, Phone, MessageCircle, Mail } from "lucide-react";

export default function EllenexProperties() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const logoUrl = reactLogo;   // ✅ use the imported file

  // Remove all slide-related state and effects
  // Just use the logo directly

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/share/17nkaaMsxc/?mibextid=wwXIfr', color: '#1877F2', name: 'facebook' },
    { icon: Instagram, url: 'https://instagram.com/Ellenexproperties_realtor', color: '#E4405F', name: 'instagram' },
    { icon: Youtube, url: 'https://youtube.com/@ellenexproperties?si=v2Xy4vK_iNB-dmKl', color: '#FF0000', name: 'youtube' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/ellenex-property-831915361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', color: '#0A66C2', name: 'linkedin' },
    { icon: AiFillTikTok, url: 'https://www.tiktok.com/@ellenex.propertie6?_r=1&_t=ZS-91lvVNSa5CP', color: '#000000', name: 'tiktok' }
  ];

  const contactLinks = [
    { 
      label: 'SALES WHATSAPP', 
      value: '+234 703 732 8339', 
      url: 'https://wa.me/+2347037328339',
      icon: PiWhatsappLogoDuotone,
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
      value: '@Ellenexproperties_realtor', 
      url: 'https://instagram.com/Ellenexproperties_realtor',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600'
    },
    { 
      label: 'FACEBOOK', 
      value: 'Ellenex property', 
      url: 'https://www.facebook.com/share/17nkaaMsxc/?mibextid=wwXIfr',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700'
    },
    { 
      label: 'YOUTUBE', 
      value: 'Ellenex properties', 
      url: 'https://youtube.com/@ellenexproperties?si=v2Xy4vK_iNB-dmKl',
      icon: Youtube,
      color: 'from-red-500 to-red-600'
    },
    { 
      label: 'LINKEDIN', 
      value: 'Ellenex properties ', 
      url: 'https://www.linkedin.com/in/ellenex-property-831915361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ',
      icon: Linkedin,
      color: 'from-blue-700 to-blue-800'
    },
    { 
     label: 'TIKTOK', 
     value: ' Ellenex properties', 
     url: 'https://www.tiktok.com/@ellenex.propertie6?_r=1&_t=ZS-91lvVNSa5CP',
     icon: AiFillTikTok,
     color: 'from-black to-gray-900'
    },
    { 
      label: 'EMAIL US', 
      value: 'Ellenexnero@gmail.com', 
      url: 'mailto:Ellenexnero@gmail.com',
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
          {/* Logo Section - Simplified */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-linear-to-br from-white to-gray-100 p-1 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden shadow-inner">
                  {/* Always show the logo */}
                  {logoUrl ? (
                    <img 
                      src={logoUrl} 
                      alt="Ellenex Properties Logo" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg">
                      EP
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Website Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-gray-900 drop-shadow-sm">
            Ellenex-properties
          </h1>
          
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-gray-800 to-transparent mx-auto mb-6"></div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
            TOP-RATED REALTOR SERVING Lekki/AJAH/Vi/Ikoyi
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg mb-4 max-w-2xl mx-auto leading-relaxed text-gray-800">
           At Ellenex Properties, we help investors make smart real estate decisions and guide clients to
            their dream homes with confidence and speed. We take pride in delivering exceptional service,
             whether you're selling a property or searching for a new one.
          </p>

          <p className="text-sm sm:text-base mb-4 max-w-2xl mx-auto leading-relaxed text-gray-700">
            Each client is paired with a dedicated agent who manages the entire process from start to finish,
             providing clear communication and weekly updates along the way.
          </p>

          <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-gray-700">
           At Ellenex Properties, your goals are our priority and we're here to make every step seamless
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