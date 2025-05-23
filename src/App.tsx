import { useTheme } from "./context/ThemeContext";
import { MdPayments, MdGroup } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { SiDinersclub } from "react-icons/si";
import { SectionOne } from "./components/ui/SectionOne";
import { MarqueeSection } from "./components/ui/MarqueeSection";
import CardSection from "./components/ui/CardSection";
import LastSection from "./components/ui/LastSection";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "light" ? "bg-[#F5F7FA]" : "bg-black"} w-full`}>
      {/* Bagian pertama */}
      <SectionOne />

      {/* Bagian kedua */}
      <div className="h-screen bg-white">
        <MarqueeSection />

        {/* card section */}
        <CardSection />

        <div className="w-full h-full">
          <div className="flex  p-5 mx-10">
            <img src="/images/main2.png" alt="main2" />
            <div className="flex flex-col">
              <p className="font-semibold w-[450px] h-fit text-3xl mt-10">The unseen of spending three years at Pixelgrade</p>
              <p className=" mt-4 font-thin w-fit justify-center items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam
                pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </p>
              <div className="bg-[#4CAF4F] w-28 rounded text-white p-1 h-10 cursor-pointer hover:bg-[#3E8E41] mt-4 flex justify-center items-center">Learn More </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F7FA] flex w-full h-72 items-center">
          <div className="p-20 my-10">
            <p className="font-semibold text-3xl">Helping a local </p>
            <p className="font-semibold text-3xl text-[#4CAF4F]">business reinvent itself</p>
            <p className="my-2">We reached here with our hard work and dedication</p>
          </div>

          <div className="items-center justify-center gap-8 flex flex-col mx-7 w-1/5">
            <div className="flex justify-center">
              <MdGroup className="w-24 h-12 text-[#4CAF4F]" />
              <div className="flex flex-col">
                <p className=" items-start flex font-bold text-2xl">2,245,341</p>
                <p className=" items-end flex  font-thin">Members</p>
              </div>
            </div>
            <div className="flex justify-center">
              <GiClick className="w-24 h-12 text-[#4CAF4F]" />
              <div className="flex flex-col">
                <p className=" items-start flex font-bold text-2xl">828,867</p>
                <p className=" items-end flex  font-thin">Event Bookings</p>
              </div>
            </div>
          </div>

          <div className="items-center justify-center gap-8 flex flex-col w-1/5">
            <div className="flex relative  justify-center">
              <SiDinersclub className="w-24 h-12 text-[#4CAF4F]" />
              <div className="flex flex-col">
                <p className=" items-start flex font-bold text-2xl">2,245,341</p>
                <p className=" items-end flex  font-thin">Members</p>
              </div>
            </div>
            <div className="flex justify-center">
              <MdPayments className="w-24 h-12 text-[#4CAF4F]" />
              <div className="flex flex-col">
                <p className=" items-start flex font-bold text-2xl">828,867</p>
                <p className=" items-end flex  font-thin">Event Bookings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="w-full p-3 h-64 my-24 flex">
            <LastSection className="mx-16 mt-4" />
            <div className="mx-24">
              <p className="flex items-start mt-14 w-[400px] font-semibold text-2xl my-4">How to design your site footer like we did</p>
              <p className=" font-thin">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea
                dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est,
                finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
              </p>
              <div className="bg-[#4CAF4F] w-28 rounded text-white p-1 h-10 cursor-pointer hover:bg-[#3E8E41] mt-4 flex justify-center items-center">Learn More</div>
            </div>
          </div>
          <div className="flex w-full h-[21rem] bg-[#F5F7FA] gap-4 p-8 mt-20">
            <img src="/images/middlesection.png" className="w-72 mx-4 h-72" alt="" />
            <div className="mx-4 flex flex-col items center">
              <p className="mr-28">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie
                arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
                Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <p className="text-md font-semibold mt-3 text-[#4CAF4F]">Tim Smith</p>
              <p className="font-thin">British Dragon Boat Racing Association</p>
              <div className="flex items-center gap-3">
                <img className="w-24 h-20" src="/images/github.png" alt="" />
                <img className="w-24 h-20" src="/images/microsoft.png" alt="" />
                <img className="w-20 h-16" src="/images/apple.png" alt="" />
                <img className="w-24 h-20" src="/images/linux.png" alt="" />
                <img className="w-24 h-20" src="/images/mongo.png" alt="" />
                <p className="text-[#4CAF4F] text-xl ml-6">Meet all Customers</p>
                <div className="flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.02324 6.24222L7.12263 5.14283C7.25301 5.01245 7.25301 4.80106 7.12263 4.67068L6.02324 3.57129M7.02484 4.90676L2.35071 4.90676" stroke="#4CAF4F" stroke-width="0.5008" stroke-linecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen w-full">
            <div className="h-24 justify-center items-center flex flex-col">
              <h2 className="font-semibold text-2xl  mt-6">Caring is the new marketing</h2>
              <p className="w-[35rem] mt-2 font-thin text-center">
                The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 px-12 mt-9 py-4">
              <div className="relative w-72 h-72 rounded shadow-lg">
                <img src="/images/grid1.jpeg" className="w-full h-full object-cover" alt="" />
                <div className="absolute overflow-visible z-50 min-h-32 text-center -bottom-16  left-4 right-4 bg-white rounded-md shadow-md p-4 flex flex-col gap-2">
                  <p className=" ml-1 font-semibold text-sm w-52">Creating Streamlined Safeguarding Processes with OneRen</p>
                  <p className="text-[#4CAF4F] font-medium text-sm cursor-pointer">Readmore →</p>
                </div>
              </div>

              <div className="relative w-72 h-72 rounded shadow-lg">
                <img src="/images/grid2.jpeg" className="w-full h-full object-cover" alt="" />
                <div className="absolute overflow-visible z-50 min-h-32 text-center -bottom-16  left-4 right-4 bg-white rounded-md shadow-md p-4 flex flex-col gap-2">
                  <p className="font-semibold text-sm w-56">What are your safeguarding responsibilities and how can you manage them?</p>
                  <p className="text-[#4CAF4F] font-medium text-sm cursor-pointer">Readmore →</p>
                </div>
              </div>

              <div className="relative w-72 h-72 rounded shadow-lg">
                <img src="/images/grid3.jpeg" className="w-full h-full object-cover" alt="" />
                <div className="absolute overflow-visible z-50 min-h-32 text-center -bottom-16  left-4 right-4 bg-white rounded-md shadow-md p-4 flex flex-col gap-2">
                  <p className="font-semibold text-sm w-52">Revamping the Membership Model with Triathlon Australia</p>
                  <p className="text-[#4CAF4F] font-medium text-sm cursor-pointer">Readmore →</p>
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
