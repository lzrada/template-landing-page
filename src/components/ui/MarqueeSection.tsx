import type { JSX } from "react";
import Marquee from "react-fast-marquee";

export const MarqueeSection = (): JSX.Element => {
  const partners = [
    { name: "Adidas", logo: "/images/adidas.png" },
    { name: "Apple", logo: "/images/apple.png" },
    { name: "Firebase", logo: "/images/firebase.png" },
    { name: "GitHub", logo: "/images/github.png" },
    { name: "Linux", logo: "/images/linux.png" },
    { name: "Microsoft", logo: "/images/microsoft.png" },
    { name: "MongoDB", logo: "/images/mongo.png" },
    { name: "Puma", logo: "/images/puma.png" },
    { name: "TikTok", logo: "/images/tiktok.png" },
    { name: "Tokopedia", logo: "/images/tokped.png" },
    { name: "TypeScript", logo: "/images/ts-logo.png" },
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">Our Partners</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">We have been working with some Fortune 500+ clients</p>
        </div>

        {/* Mobile Version - Slower Marquee */}
        <div className="block lg:hidden">
          <Marquee
            gradient={true}
            gradientColor="rgb(248, 250, 252)" // gray-50 color
            gradientWidth={40}
            speed={25} // Slower for mobile
            pauseOnHover={true}
            className="py-4"
          >
            {partners.map((partner, index) => (
              <div key={`mobile-${partner.name}-${index}`} className="flex items-center justify-center mx-4 sm:mx-6">
                <img src={partner.logo} alt={`${partner.name} logo`} className="w-24 h-20 sm:w-32 sm:h-24 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Desktop Version - Standard Grid with Subtle Animation */}
        <div className="hidden lg:block">
          <Marquee
            gradient={true}
            gradientColor="rgb(248, 250, 252)" // gray-50 color
            gradientWidth={60}
            speed={40} // Medium speed for desktop
            pauseOnHover={true}
            className="py-6"
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={`desktop-${partner.name}-${index}`} className="flex items-center justify-center mx-8 xl:mx-12">
                <img src={partner.logo} alt={`${partner.name} logo`} className="w-40 h-32 xl:w-48 xl:h-36 object-contain opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110" />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Alternative Static Grid for Desktop (Optional) */}
        {/* Uncomment this and comment the marquee above if you prefer static layout on desktop */}
        {/*
        <div className="hidden lg:grid lg:grid-cols-6 gap-8 xl:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={`static-${partner.name}-${index}`}
              className="flex items-center justify-center group"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 xl:h-16 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};
