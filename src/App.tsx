import { useTheme } from "./context/ThemeContext";
import Marquee from "react-fast-marquee";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "light" ? "bg-[#F5F7FA]" : "bg-black"} w-full`}>
      {/* Bagian pertama */}
      <div className="min-h-screen w-full flex justify-center items-center p-12 gap-16">
        <div>
          <p className="text-3xl font-bold">
            Lessons and insights
            <p className="text-[#4CAF4F]">from 8 years</p>
            <p className="text-sm font-thin">Where to grow your business as a photographer: site or social media?</p>
            <div className="flex justify-center items-center rounded font-normal text-sm text-white w-[89px] h-[36px] mt-2 cursor-pointer bg-[#4CAF4F] hover:bg-[#3E8E41]">Register</div>
          </p>
        </div>

        <div>
          <img src="/images/main.png" className="w-[400px] h-[400px]" alt="Gambar" />
        </div>

        <p id="our-partners" className="invisible absolute -bottom-7">
          test
        </p>
      </div>

      {/* Bagian kedua */}
      <div className="h-screen bg-white">
        <div className="flex justify-center items-center ">
          <div className="flex flex-col">
            <p className="flex text-3xl font-semibold justify-center items-center">Our Partners</p>
            <p className="font-thin">We have been working with some Fortune 500+ clients</p>
          </div>
        </div>
        <div className="p-3 m-3 flex justify-center items-center w-auto">
          <Marquee speed={100} className="flex gap-4 ">
            <img src="/images/adidas.png" className="w-60 m-3 h-52 object-fill"></img>
            <img src="/images/apple.png" className="w-60 m-3 h-52 object-fill"></img>
            <img src="/images/firebase.png" className="w-60 m-3 h-52 object-fill"></img>
            <img src="/images/github.png" className="w-60 m-3 h-52 object-fill"></img>
            <img src="/images/linux.png" className="w-60 m-3 h-52 object-fill"></img>
            <img src="/images/microsoft.png" className="w-60 m-3 h-52 object-fill"></img>
          </Marquee>
        </div>
        <div className="p-3  flex justify-center items-center w-auto">
          <Marquee speed={100} direction="right" className="flex gap-4 ">
            <img src="/images/mongo.png" className="w-60 mx-3 h-52 object-fill"></img>
            <img src="/images/puma.png" className="w-60 mx-3 h-52 object-fill"></img>
            <img src="/images/tiktok.png" className="w-60 mx-3 h-52 object-fill"></img>
            <img src="/images/tokped.png" className="w-60 mx-3 h-52 object-fill"></img>
            <img src="/images/ts-logo.png" className="w-60 mx-3 h-52 object-fill"></img>
          </Marquee>
        </div>

        <div className="flex flex-col font-semibold text-2xl font-sans justify-center items-center">
          <p>Manage your entire community </p>
          <p>in a single system</p>
          <p className="text-sm mt-2 font-thin">Who is Nextcent suitable for?</p>
        </div>

        <div className="grid grid-cols-3 p-10 ml-24 m-4 gap-4">
          <div className="text-center flex flex-col items-center p-2 justify-center w-60 h-60">
            <div className="w-12 h-12 rounded-br-2xl rounded-tl-2xl rounded bg-teal-300"></div>
            <p className="font-semibold m-2">Membership Organisations</p>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="text-center flex flex-col items-center p-2 justify-center w-60 h-60">
            <div className="w-12 h-12 rounded-br-2xl rounded-tl-2xl rounded bg-teal-300"></div>
            <p className="font-semibold m-2">National Associations</p>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className="text-center flex flex-col items-center p-2 justify-center w-60 h-60">
            <div className="w-12 h-12 rounded-br-2xl rounded-tl-2xl rounded bg-teal-300"></div>
            <p className="font-semibold m-2">Clubs And Groups</p>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
