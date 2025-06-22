import type { JSX } from "react";

export const SectionOne = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center">
      {/* Mobile Layout - Image First */}
      <div className="lg:hidden w-full flex flex-col items-center px-4 py-8">
        {/* Mobile Image - Hero Style */}
        <div className="w-full max-w-sm mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF4F]/10 to-transparent rounded-2xl"></div>
          <img src="/images/main.png" className="w-full h-auto relative z-10 drop-shadow-lg" alt="Business growth illustration" />
        </div>

        {/* Mobile Text Content */}
        <div className="text-center max-w-sm">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2">Lessons and insights</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4CAF4F] mb-4">from 8 years</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 px-2">Where to grow your business as a photographer: site or social media?</p>
          <button className="w-full max-w-xs bg-[#4CAF4F] hover:bg-[#3E8E41] text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">Get Started Now</button>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex w-full justify-center items-center p-12 gap-16">
        {/* Desktop Text Content */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
            Lessons and insights
            <span className="block text-[#4CAF4F]">from 8 years</span>
          </h1>
          <p className="text-base xl:text-lg font-light mt-6 text-gray-600 leading-relaxed">Where to grow your business as a photographer: site or social media?</p>
          <button className="inline-flex justify-center items-center rounded-lg font-semibold text-base text-white px-8 py-4 mt-8 cursor-pointer bg-[#4CAF4F] hover:bg-[#3E8E41] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Register Now
          </button>
        </div>

        {/* Desktop Image */}
        <div className="flex-1 flex justify-center items-center max-w-md">
          <img src="/images/main.png" className="w-full h-auto max-w-[400px] xl:max-w-[450px] drop-shadow-xl" alt="Business growth illustration" />
        </div>
      </div>

      {/* Anchor for scroll */}
      <p id="our-partners" className="invisible absolute -bottom-7"></p>
    </div>
  );
};
