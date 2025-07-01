import { useTheme } from "./context/ThemeContext";
import { MdPayments, MdGroup } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { SiDinersclub } from "react-icons/si";
import { SectionOne } from "./components/ui/SectionOne";
import { MarqueeSection } from "./components/ui/MarqueeSection";
import CardSection from "./components/ui/CardSection";
import LastSection from "./components/ui/LastSection";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "light" ? "bg-[#F5F7FA]" : "bg-black"} w-full overflow-y-hidden `}>
      {/* Bagian pertama */}
      <SectionOne />

      {/* Bagian kedua */}
      <div className="min-h-screen bg-white">
        <MarqueeSection />
        {/* card section */}
        <CardSection />
        {/* Main content section */}
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-5 mx-4 lg:mx-10">
            <div className="w-full lg:w-1/2">
              <img src="/images/main2.png" alt="main2" className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 justify-center">
              <p className="font-semibold text-xl sm:text-2xl lg:text-3xl mt-4 lg:mt-10 leading-tight">The unseen of spending three years at Pixelgrade</p>
              <p className="mt-4 font-thin text-sm sm:text-base leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam
                pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </p>
              <div className="bg-[#4CAF4F] w-fit px-6 py-2 rounded text-white cursor-pointer hover:bg-[#3E8E41] mt-4 transition-colors">Learn More</div>
            </div>
          </div>
        </div>
        {/* Stats section */}

        <div className="bg-[#F5F7FA] w-full py-8 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-20">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="font-semibold text-xl sm:text-2xl lg:text-3xl">Helping a local</p>
              <p className="font-semibold text-xl sm:text-2xl lg:text-3xl text-[#4CAF4F]">business reinvent itself</p>
              <p className="my-2 text-sm sm:text-base text-gray-600">We reached here with our hard work and dedication</p>
            </div>

            {/* Stats grid - PERBAIKAN DI SINI */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <MdGroup className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#4CAF4F] flex-shrink-0" />
                  <div className="min-w-0">
                    {" "}
                    {/* min-w-0 untuk mencegah overflow */}
                    <p className="font-bold text-sm sm:text-lg lg:text-xl">2,245,341</p>
                    <p className="font-thin text-xs sm:text-sm text-gray-600">Members</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <SiDinersclub className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#4CAF4F] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-lg lg:text-xl">46,328</p>
                    <p className="font-thin text-xs sm:text-sm text-gray-600">Clubs</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <GiClick className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#4CAF4F] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-lg lg:text-xl">828,867</p>
                    <p className="font-thin text-xs sm:text-sm text-gray-600">Event Bookings</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <MdPayments className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#4CAF4F] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-lg lg:text-xl">1,926,436</p>
                    <p className="font-thin text-xs sm:text-sm text-gray-600">Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {/* Design section */}
          <div className="w-full py-8 lg:py-24">
            <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-16">
              <div className="w-full lg:w-1/2">
                <LastSection className="w-full" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="font-semibold text-xl sm:text-2xl leading-tight mt-4 lg:mt-0">How to design your site footer like we did</p>
                <p className="font-thin text-sm sm:text-base mt-4 leading-relaxed text-gray-600">
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea
                  dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
                </p>
                <div className="bg-[#4CAF4F] w-fit px-6 py-2 rounded text-white cursor-pointer hover:bg-[#3E8E41] mt-4 transition-colors">Learn More</div>
              </div>
            </div>
          </div>

          {/* Testimonial section */}
          <div className="w-full bg-[#F5F7FA] py-8 lg:py-16">
            <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-8">
              <div className="w-full lg:w-1/3">
                <img src="/images/middlesection.png" className="w-full h-64 lg:h-72 object-cover rounded-lg" alt="Testimonial" />
              </div>
              <div className="w-full lg:w-2/3 flex flex-col justify-center">
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-4">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie
                  arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
                </p>
                <p className="text-base sm:text-lg font-semibold text-[#4CAF4F]">Tim Smith</p>
                <p className="font-thin text-sm sm:text-base text-gray-600 mb-6">British Dragon Boat Racing Association</p>

                {/* Partner logos */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <img className="w-16 h-12 sm:w-20 sm:h-16 object-contain" src="/images/github.png" alt="GitHub" />
                  <img className="w-16 h-12 sm:w-20 sm:h-16 object-contain" src="/images/microsoft.png" alt="Microsoft" />
                  <img className="w-16 h-12 sm:w-20 sm:h-16 object-contain" src="/images/apple.png" alt="Apple" />
                  <img className="w-16 h-12 sm:w-20 sm:h-16 object-contain" src="/images/linux.png" alt="Linux" />
                  <img className="w-16 h-12 sm:w-20 sm:h-16 object-contain" src="/images/mongo.png" alt="MongoDB" />
                </div>

                <div className="flex items-center gap-2 text-[#4CAF4F] cursor-pointer hover:underline">
                  <p className="text-base sm:text-lg">Meet all Customers</p>
                  <svg width="24" height="24" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.02324 6.24222L7.12263 5.14283C7.25301 5.01245 7.25301 4.80106 7.12263 4.67068L6.02324 3.57129M7.02484 4.90676L2.35071 4.90676" stroke="#4CAF4F" strokeWidth="0.5008" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Blog section - DIPERBAIKI */}
          <div className="w-full py-12 lg:py-24">
            <div className="text-center mb-8 lg:mb-12 px-4">
              <h2 className="font-semibold text-2xl sm:text-3xl mb-4">Caring is the new marketing</h2>
              <p className="max-w-2xl mx-auto text-sm sm:text-base font-thin text-gray-600 leading-relaxed">
                The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-12">
              {[
                { img: "/images/grid1.jpeg", title: "Creating Streamlined Safeguarding Processes with OneRen" },
                { img: "/images/grid2.jpeg", title: "What are your safeguarding responsibilities and how can you manage them?" },
                { img: "/images/grid3.jpeg", title: "Revamping the Membership Model with Triathlon Australia" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Image container */}
                  <div className="w-full">
                    <img src={item.img} className="w-full h-48 sm:h-56 lg:h-52 object-cover" alt={`Blog ${index + 1}`} />
                  </div>

                  {/* Content container */}
                  <div className="p-4 sm:p-6">
                    <h3 className="font-semibold text-base sm:text-lg leading-tight mb-3 text-gray-800 line-clamp-2">{item.title}</h3>
                    <button className="text-[#4CAF4F] font-medium text-sm hover:text-[#3E8E41] transition-colors duration-200 flex items-center gap-1 group">
                      <span>Readmore</span>
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-gray-100 py-12 lg:py-16 px-4">
            <div className="text-center max-w-md mx-auto">
              <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-6 leading-tight">Pellentesque suscipit fringilla libero eu.</h2>
              <div className="bg-[#4CAF4F] hover:bg-[#3E8E41] transition-colors cursor-pointer text-white rounded px-6 py-3 inline-flex items-center gap-2">
                <p className="font-medium">Get a Demo →</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          {/* Footer - MODERN & RESPONSIVE */}
          <div className="bg-gradient-to-br from-[#0B0D17] via-[#1a1d2e] to-[#0B0D17] text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-[#4CAF4F] rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 py-16 lg:py-20 px-4 sm:px-6 lg:px-16">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Company info - Takes more space on large screens */}
                <div className="lg:col-span-4 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-6">
                    <div className="relative">
                      <img src="/images/black_logo.png" className="w-14 h-14 lg:w-16 lg:h-16" alt="Logo" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#4CAF4F] rounded-full animate-pulse"></div>
                    </div>
                    <div className="ml-3">
                      <p className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">LAZZGHIF</p>
                      <p className="text-xs text-gray-400 mt-1">Digital Innovation</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-sm text-gray-300 leading-relaxed max-w-sm mx-auto sm:mx-0">Empowering businesses with cutting-edge digital solutions and innovative design experiences.</p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Active since 2020</span>
                    </div>
                  </div>

                  {/* Social media with better styling */}
                  <div>
                    <p className="text-sm font-semibold mb-4 text-center sm:text-left">Connect with us</p>
                    <div className="flex gap-3 justify-center sm:justify-start">
                      {[
                        { Icon: FaInstagram, color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500", label: "Instagram" },
                        { Icon: FaTwitter, color: "hover:bg-blue-500", label: "Twitter" },
                        { Icon: FaYoutube, color: "hover:bg-red-500", label: "YouTube" },
                        { Icon: FaLinkedin, color: "hover:bg-blue-600", label: "LinkedIn" },
                      ].map(({ Icon, color, label }, index) => (
                        <button
                          key={index}
                          className={`group relative rounded-xl w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 ${color} cursor-pointer flex justify-center items-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-900/50`}
                          aria-label={label}
                        >
                          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs bg-gray-900 px-2 py-1 rounded text-white whitespace-nowrap">{label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Copyright - moved here for better mobile layout */}
                  <div className="mt-8 pt-6 border-t border-gray-700/50 text-center sm:text-left">
                    <p className="text-xs text-gray-400 mb-1">© 2025 Lazzghif. All rights reserved</p>
                    <p className="text-xs text-gray-500">Made with ❤️ in Indonesia</p>
                  </div>
                </div>

                {/* Company links */}
                <div className="lg:col-span-2 text-center sm:text-left">
                  <div className="relative">
                    <h3 className="font-semibold text-lg mb-6 relative inline-block">
                      Company
                      <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#4CAF4F] to-transparent"></div>
                    </h3>
                    <div className="space-y-3">
                      {[
                        { text: "About us", icon: "👥" },
                        { text: "Blog", icon: "📝" },
                        { text: "Contact us", icon: "📞" },
                        { text: "Pricing", icon: "💰" },
                        { text: "Testimonial", icon: "⭐" },
                      ].map(({ text, icon }, index) => (
                        <Link key={index} to="#" className="group flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                          <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">{icon}</span>
                          <span className="relative">
                            {text}
                            <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#4CAF4F] transition-all duration-300 group-hover:w-full"></div>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Support links */}
                <div className="lg:col-span-2 text-center sm:text-left">
                  <div className="relative">
                    <h3 className="font-semibold text-lg mb-6 relative inline-block">
                      Support
                      <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                    </h3>
                    <div className="space-y-3">
                      {[
                        { text: "Help center", icon: "🆘" },
                        { text: "Terms of service", icon: "📋" },
                        { text: "Legal", icon: "⚖️" },
                        { text: "Privacy policy", icon: "🔒" },
                        { text: "Status", icon: "📊" },
                      ].map(({ text, icon }, index) => (
                        <Link key={index} to="#" className="group flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                          <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">{icon}</span>
                          <span className="relative">
                            {text}
                            <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="lg:col-span-4 text-center sm:text-left">
                  <div className="relative">
                    <h3 className="font-semibold text-lg mb-6 relative inline-block">
                      Stay Connected
                      <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                    </h3>

                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">Get the latest updates, exclusive content, and special offers delivered straight to your inbox.</p>

                    {/* Enhanced Newsletter Form */}
                    <div className="relative max-w-sm mx-auto sm:mx-0">
                      <div className="relative group">
                        <input
                          type="email"
                          className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-4 py-3 pr-12 text-sm placeholder-gray-400 focus:outline-none focus:border-[#4CAF4F] focus:bg-gray-800/70 transition-all duration-300"
                          placeholder="Enter your email"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#4CAF4F] to-[#45a049] hover:from-[#45a049] hover:to-[#4CAF4F] p-2 rounded-lg transition-all duration-300 hover:scale-105 group-hover:shadow-lg group-hover:shadow-green-500/25">
                          <TiLocationArrow className="w-4 h-4 text-white" />
                        </button>
                      </div>

                      {/* Newsletter benefits */}
                      <div className="mt-4 space-y-2">
                        {["📰 Weekly insights", "🎁 Exclusive offers", "🚀 Product updates"].map((benefit, index) => (
                          <div key={index} className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-400">
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-6 pt-6 border-t border-gray-700/50">
                      <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Spam-free</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Unsubscribe anytime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom section with additional info */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-4">
                    <span>🌍 Available worldwide</span>
                    <span>⚡ 99.9% uptime</span>
                    <span>🔒 SSL secured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Built with</span>
                    <span className="text-red-500">♥</span>
                    <span>using React & Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
