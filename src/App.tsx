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
    <div className={`${theme === "light" ? "bg-[#F5F7FA]" : "bg-black"} w-full`}>
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
              <p className="font-semibold text-2xl sm:text-3xl">Helping a local</p>
              <p className="font-semibold text-2xl sm:text-3xl text-[#4CAF4F]">business reinvent itself</p>
              <p className="my-2 text-sm sm:text-base text-gray-600">We reached here with our hard work and dedication</p>
            </div>

            {/* Stats grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full max-w-md lg:max-w-none">
              <div className="flex items-center gap-4">
                <MdGroup className="w-12 h-12 sm:w-16 sm:h-16 text-[#4CAF4F] flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="font-bold text-lg sm:text-2xl">2,245,341</p>
                  <p className="font-thin text-sm sm:text-base text-gray-600">Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <SiDinersclub className="w-12 h-12 sm:w-16 sm:h-16 text-[#4CAF4F] flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="font-bold text-lg sm:text-2xl">46,328</p>
                  <p className="font-thin text-sm sm:text-base text-gray-600">Clubs</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <GiClick className="w-12 h-12 sm:w-16 sm:h-16 text-[#4CAF4F] flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="font-bold text-lg sm:text-2xl">828,867</p>
                  <p className="font-thin text-sm sm:text-base text-gray-600">Event Bookings</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MdPayments className="w-12 h-12 sm:w-16 sm:h-16 text-[#4CAF4F] flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="font-bold text-lg sm:text-2xl">1,926,436</p>
                  <p className="font-thin text-sm sm:text-base text-gray-600">Payments</p>
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

          {/* Blog section */}
          <div className="w-full py-12 lg:py-24">
            <div className="text-center mb-8 lg:mb-12 px-4">
              <h2 className="font-semibold text-2xl sm:text-3xl mb-4">Caring is the new marketing</h2>
              <p className="max-w-2xl mx-auto text-sm sm:text-base font-thin text-gray-600 leading-relaxed">
                The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12 pb-20">
              {[
                { img: "/images/grid1.jpeg", title: "Creating Streamlined Safeguarding Processes with OneRen" },
                { img: "/images/grid2.jpeg", title: "What are your safeguarding responsibilities and how can you manage them?" },
                { img: "/images/grid3.jpeg", title: "Revamping the Membership Model with Triathlon Australia" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative">
                    <div className="w-full h-64 sm:h-72 rounded-lg shadow-lg overflow-hidden mb-16">
                      <img src={item.img} className="w-full h-full object-cover" alt={`Blog ${index + 1}`} />
                    </div>
                    <div className="absolute -bottom-12 left-4 right-4 bg-white rounded-lg shadow-lg p-4">
                      <p className="font-semibold text-sm leading-tight mb-2 text-center">{item.title}</p>
                      <p className="text-[#4CAF4F] font-medium text-sm cursor-pointer hover:underline text-center">Readmore →</p>
                    </div>
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
          <div className="bg-[#0B0D17] text-white py-12 lg:py-16">
            <div className="px-4 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Company info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <img src="/images/black_logo.png" className="w-16 h-16 lg:w-20 lg:h-20" alt="Logo" />
                    <p className="text-lg lg:text-xl font-semibold ml-2">LAZZGHIF</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-sm mb-1">Copyright © 2025 Lazzghif.</p>
                    <p className="text-sm mb-6">All rights reserved</p>
                    <div className="flex gap-3 justify-center lg:justify-start">
                      {[FaInstagram, FaTwitter, FaYoutube, FaLinkedin].map((Icon, index) => (
                        <div key={index} className="rounded-full w-10 h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer flex justify-center items-center transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Company links */}
                <div className="text-center lg:text-left">
                  <p className="font-semibold text-lg mb-4">Company</p>
                  <div className="font-thin text-sm space-y-2">
                    {["About us", "Blog", "Contact us", "Pricing", "Testimonial"].map((link, index) => (
                      <Link key={index} to="#" className="block opacity-90 hover:opacity-100 transition-opacity">
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Support links */}
                <div className="text-center lg:text-left">
                  <p className="font-semibold text-lg mb-4">Support</p>
                  <div className="font-thin text-sm space-y-2">
                    {["Help center", "Terms of service", "Legal", "Privacy policy", "Status"].map((link, index) => (
                      <Link key={index} to="#" className="block opacity-90 hover:opacity-100 transition-opacity">
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="text-center lg:text-left">
                  <h2 className="font-semibold text-lg mb-4">Stay up to Date</h2>
                  <div className="bg-gray-800 rounded-lg p-2 flex items-center gap-2 max-w-sm mx-auto lg:mx-0">
                    <input type="text" className="bg-transparent outline-none text-sm flex-1 placeholder-gray-400" placeholder="Your email address" />
                    <TiLocationArrow className="w-6 h-6 opacity-90 cursor-pointer hover:opacity-100 transition-opacity flex-shrink-0" />
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
